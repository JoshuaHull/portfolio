import { describe, expect, test } from "vitest";
import { FileSystem } from "@file-exploring";
import { SourceControl } from "@source-controlling";

describe("staging and unstaging files", () => {
  test("should stage the given file", () => {
    // Arrange
    const fs = new FileSystem();
    fs.addFile("file.txt");

    const sourceControl = new SourceControl(fs);

    // Act
    sourceControl.stageChange("/file.txt");

    // Assert
    expect(sourceControl.stagedChanges).toStrictEqual([{
      modification: "Create",
      filePath: "/file.txt",
    }]);
  });

  test("should do nothing if the file has already been staged", () => {
    // Arrange
    const fs = new FileSystem();
    fs.addFile("file.txt");

    const sourceControl = new SourceControl(fs);
    sourceControl.stageChange("/file.txt");

    // Act
    sourceControl.stageChange("/file.txt");

    // Assert
    expect(sourceControl.stagedChanges).toStrictEqual([{
      modification: "Create",
      filePath: "/file.txt",
    }]);
  });

  test("should unstage the given file", () => {
    // Arrange
    const fs = new FileSystem();
    fs.addFile("file.txt");

    const sourceControl = new SourceControl(fs);
    sourceControl.stageChange("/file.txt");

    // Act
    sourceControl.unstageChange("/file.txt",);

    // Assert
    expect(sourceControl.stagedChanges).toStrictEqual([]);
  });

  test("should do nothing if the file has already been unstaged", () => {
    // Arrange
    const fs = new FileSystem();
    fs.addFile("file.txt");

    const sourceControl = new SourceControl(fs);
    sourceControl.stageChange("/file.txt");
    sourceControl.unstageChange("/file.txt",);

    // Act
    sourceControl.unstageChange("/file.txt");

    // Assert
    expect(sourceControl.stagedChanges).toStrictEqual([]);
  });

  test("should accurately calculate all unstaged changes", () => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);

    // first commit - adding stuff
    fs.addFile("firstCommit_file_1");
    const f_1 = fs.addFolder("f_1");
    f_1.addFile("firstCommit_file_2");

    // first commit - stage and commit
    sourceControl.stageChange("/firstCommit_file_1");
    sourceControl.stageChange("/f_1/firstCommit_file_2");
    sourceControl.commit();

    // second commit - adding stuff
    fs.addFile("secondCommit_file_1");
    f_1.addFile("secondCommit_file_2");
    const f_2 = fs.addFolder("f_2");
    f_2.addFile("secondCommit_file_3");

    // second commit - stage and commit
    sourceControl.stageChange("/secondCommit_file_1");
    sourceControl.stageChange("/f_1/secondCommit_file_2");
    sourceControl.stageChange("/f_2/secondCommit_file_3");
    sourceControl.commit();

    // unstaged changes
    f_2.addFile("unstaged_creation_1");
    fs.addFile("unstaged_creation_2");
    f_1.deleteFile("firstCommit_file_2");
    f_2.deleteFile("secondCommit_file_3");

    // Act
    const unstagedChanges = sourceControl.getUnstagedChanges();

    // Assert
    expect(unstagedChanges).toStrictEqual([
      {
        filePath: "/unstaged_creation_2",
        modification: "Create",
      },
      {
        filePath: "/f_2/unstaged_creation_1",
        modification: "Create",
      },
      {
        filePath: "/f_1/firstCommit_file_2",
        modification: "Delete",
      },
      {
        filePath: "/f_2/secondCommit_file_3",
        modification: "Delete",
      },
    ]);
  });

  test("should correctly stage all changes", () => {
    // Arrange
    const fs = new FileSystem();
    fs.addFile("file.txt");
    fs.addFile("file2.txt");
    fs.addFile("file3.txt");

    const sourceControl = new SourceControl(fs);

    // Act
    sourceControl.stageAllChanges();

    // Assert
    expect(sourceControl.stagedChanges).toHaveLength(3);
  });

  test("should correctly unstage all changes", () => {
    // Arrange
    const fs = new FileSystem();
    fs.addFile("file.txt");
    fs.addFile("file2.txt");
    fs.addFile("file3.txt");

    const sourceControl = new SourceControl(fs);
    sourceControl.stageAllChanges();

    // Act
    sourceControl.unstageAllChanges();

    // Assert
    expect(sourceControl.stagedChanges).toHaveLength(0);
  });
});

describe("committing files", () => {
  test("when committing, we should set the root, head, and clear staged changes", () => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);

    const folder = fs.addFolder("some folder");
    folder.addFile("some file");

    sourceControl.stageChange("/some folder/some file");

    // Act
    sourceControl.commit();

    // Assert
    expect(sourceControl.head).toBeTruthy();
    expect(sourceControl.root).toBeTruthy();
    expect(sourceControl.stagedChanges).toHaveLength(0);
    expect(sourceControl.head.changes).toHaveLength(1);
  });

  test("should not create a commit if there are no staged changes", () => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);

    const folder = fs.addFolder("some folder");
    folder.addFile("some file");

    // Act
    sourceControl.commit();

    // Assert
    expect(sourceControl.head).toBeFalsy();
    expect(sourceControl.root).toBeFalsy();
  });

  test.each([
    {
      input: undefined,
      expectedMessage: "created 1 file",
    },
    {
      input: null,
      expectedMessage: "created 1 file",
    },
    {
      input: "",
      expectedMessage: "created 1 file",
    },
    {
      input: "hello",
      expectedMessage: "hello",
    },
  ])("should use the provided commit message assuming it's not empty", ({ input, expectedMessage }) => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);

    fs.addFile("file");
    sourceControl.stageChange("/file");

    // Act
    sourceControl.commit(input);

    // Assert
    expect(sourceControl.head.message).toBe(expectedMessage);
  });

  test.each([
    {
      expectedMessage: "created 1 file",
      changes: [
        {
          fileName: "file.txt",
          modification: "Create",
        },
      ],
    },
    {
      expectedMessage: "created 2 files",
      changes: [
        {
          fileName: "file1.txt",
          modification: "Create",
        },
        {
          fileName: "file2.txt",
          modification: "Create",
        },
      ],
    },
    {
      expectedMessage: "deleted 1 file",
      changes: [
        {
          fileName: "file.txt",
          modification: "Delete",
        },
      ],
    },
    {
      expectedMessage: "deleted 2 files",
      changes: [
        {
          fileName: "file1.txt",
          modification: "Delete",
        },
        {
          fileName: "file2.txt",
          modification: "Delete",
        },
      ],
    },
    {
      expectedMessage: "created 2 files, deleted 2 files",
      changes: [
        {
          fileName: "file1.txt",
          modification: "Delete",
        },
        {
          fileName: "file2.txt",
          modification: "Create",
        },
        {
          fileName: "file3.txt",
          modification: "Create",
        },
        {
          fileName: "file4.txt",
          modification: "Delete",
        },
      ],
    },
  ])("should create meaningful commit message when no message is provided", ({ changes, expectedMessage }) => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);

    const deletes = changes.filter(c => c.modification === "Delete");

    if (deletes.length > 0) {
      for (let { fileName } of deletes) {
        fs.addFile(fileName);
        sourceControl.stageChange(`/${fileName}`);
      }
      sourceControl.commit();
    }

    for (let { fileName } of changes.filter(c => c.modification === "Create")) {
      fs.addFile(fileName);
      sourceControl.stageChange(`/${fileName}`);
    }

    for (let { fileName } of deletes) {
      fs.deleteFile(fileName);
      sourceControl.stageChange(`/${fileName}`);
    }

    // Act
    sourceControl.commit();

    // Assert
    expect(sourceControl.head.message).toBe(expectedMessage);
  });
});

describe("commit toString", () => {
  test("should display the whole commit tree in a readable structure", () => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);

    const f1 = fs.addFolder("f1");
    f1.addFile("first commit only file");
    sourceControl.stageChange("/f1/first commit only file");
    sourceControl.commit("first commit");

    const f2 = f1.addFolder("f2");
    f2.addFile("second commit first file");
    f2.addFile("second commit second file");
    sourceControl.stageChange("/f1/f2/second commit first file");
    sourceControl.stageChange("/f1/f2/second commit second file");
    sourceControl.commit("second commit");

    f2.deleteFile("second commit second file");
    sourceControl.stageChange("/f1/f2/second commit second file");
    sourceControl.commit("third commit");

    // Act
    const result = sourceControl.head?.toString();

    // Assert
    expect(result).toBe(
`third commit
--- /f1/f2/second commit second file
second commit
+++ /f1/f2/second commit first file
+++ /f1/f2/second commit second file
first commit
+++ /f1/first commit only file
`);
  });
});
