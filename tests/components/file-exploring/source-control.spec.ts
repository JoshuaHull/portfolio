import { describe, expect, test } from "vitest";
import { FileSystem, SourceControl } from "@file-exploring";

describe("staging and unstaging files", () => {
  test("should stage the given file", () => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);

    // Act
    sourceControl.stageChange({
      modification: "Create",
      filePath: "file.txt",
    });

    // Assert
    expect(sourceControl.stagedChanges).toStrictEqual([{
      modification: "Create",
      filePath: "file.txt",
    }]);
  });

  test("should do nothing if the file has already been staged", () => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);
    sourceControl.stageChange({
      modification: "Create",
      filePath: "file.txt",
    });

    // Act
    sourceControl.stageChange({
      modification: "Create",
      filePath: "file.txt",
    });

    // Assert
    expect(sourceControl.stagedChanges).toStrictEqual([{
      modification: "Create",
      filePath: "file.txt",
    }]);
  });

  test("should unstage the given file", () => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);
    sourceControl.stageChange({
      modification: "Create",
      filePath: "file.txt",
    });

    // Act
    sourceControl.unstageChange({
      modification: "Create",
      filePath: "file.txt",
    });

    // Assert
    expect(sourceControl.stagedChanges).toStrictEqual([]);
  });

  test("should do nothing if the file has already been unstaged", () => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);
    sourceControl.stageChange({
      modification: "Create",
      filePath: "file.txt",
    });
    sourceControl.unstageChange({
      modification: "Create",
      filePath: "file.txt",
    });

    // Act
    sourceControl.unstageChange({
      modification: "Create",
      filePath: "file.txt",
    });

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
    sourceControl.stageChange({
      filePath: "/firstCommit_file_1",
      modification: "Create",
    });
    sourceControl.stageChange({
      filePath: "/f_1/firstCommit_file_2",
      modification: "Create",
    });
    sourceControl.commit();

    // second commit - adding stuff
    fs.addFile("secondCommit_file_1");
    f_1.addFile("secondCommit_file_2");
    const f_2 = fs.addFolder("f_2");
    f_2.addFile("secondCommit_file_3");

    // second commit - stage and commit
    sourceControl.stageChange({
      filePath: "/secondCommit_file_1",
      modification: "Create",
    });
    sourceControl.stageChange({
      filePath: "/f_1/secondCommit_file_2",
      modification: "Create",
    });
    sourceControl.stageChange({
      filePath: "/f_2/secondCommit_file_3",
      modification: "Create",
    });
    sourceControl.commit();

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
});

describe("committing files", () => {
  test("when committing, we should set the root, head, and clear staged changes", () => {
    // Arrange
  });
});

describe("commit toString", () => {
  test("should display the whole commit tree in a readable structure", () => {
    // Arrange
    const fs = new FileSystem();
    const sourceControl = new SourceControl(fs);

    sourceControl.stageChange({
      modification: "Create",
      filePath: "f1/first commit only file",
    });
    sourceControl.commit("first commit");

    sourceControl.stageChange({
      modification: "Create",
      filePath: "f1/f2/second commit first file",
    });
    sourceControl.stageChange({
      modification: "Create",
      filePath: "f1/f2/second commit second file",
    });
    sourceControl.commit("second commit");

    sourceControl.stageChange({
      modification: "Delete",
      filePath: "f1/f2/f3/third commit deleted file",
    });
    sourceControl.commit("third commit");

    // Act
    const result = sourceControl.head?.toString();

    // Assert
    expect(result).toBe(
`third commit
--- f1/f2/f3/third commit deleted file
second commit
+++ f1/f2/second commit first file
+++ f1/f2/second commit second file
first commit
+++ f1/first commit only file
`);
  });
});
