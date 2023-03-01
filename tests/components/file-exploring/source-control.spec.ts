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
