import { describe, expect, test } from "vitest";
import { SourceControl } from "@file-exploring";

describe("staging and unstaging files", () => {
  test("should stage the given file", () => {
    // Arrange
    const sourceControl = new SourceControl();

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
    const sourceControl = new SourceControl();
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
    const sourceControl = new SourceControl();
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
    const sourceControl = new SourceControl();
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
  });
});
