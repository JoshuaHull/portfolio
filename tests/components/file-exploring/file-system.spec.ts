import { describe, expect, test } from "vitest";
import { FileSystem } from "@file-exploring";

describe("adding folders", () => {
  test("should add a folder with a random folder name to the list of folders", () => {
    // Arrange
    const fileSystem = new FileSystem();

    // Act
    fileSystem.addFolder();

    // Assert
    expect(fileSystem.folderCount).toBe(1);
  });

  test("should add a folder with the given name to the list of folders", () => {
    // Arrange
    const fileSystem = new FileSystem();

    // Act
    fileSystem.addFolder("new-folder");

    // Assert
    expect(fileSystem.folderNames).toStrictEqual(["new-folder"]);
  });
});

describe("adding files", () => {
  test("should add a file with a random file name to the list of files", () => {
    // Arrange
    const fileSystem = new FileSystem();

    // Act
    fileSystem.addFile();

    // Assert
    expect(fileSystem.files).toHaveLength(1);
  });

  test("should add a file with the given name to the list of files", () => {
    // Arrange
    const fileSystem = new FileSystem();

    // Act
    fileSystem.addFile("new-file");

    // Assert
    expect(fileSystem.files).toStrictEqual(["new-file"]);
  });
});

describe("going up a directory", () => {
  test("should do nothing if there is no parent folder", () => {});

  test("should return the parent folder, given it exists", () => {});
});

describe("deleting files", () => {
  test("should do nothing when deleting a file which doesn't exist", () => {
    // Arrange
    const fileSystem = new FileSystem();
    fileSystem.addFile();

    // Act
    fileSystem.deleteFile("definitely-n0t-a-file-as-it-has-numb3rs");

    // Assert
    expect(fileSystem.files).toHaveLength(1);
  });

  test("should delete the given file", () => {
    // Arrange
    const fileSystem = new FileSystem();
    fileSystem.addFile();
    fileSystem.addFile("to-delete");
    fileSystem.addFile();

    // Act
    fileSystem.deleteFile("to-delete");

    // Assert
    expect(fileSystem.files).toHaveLength(2);
  });
});

describe("deleting folders", () => {
  test("should do nothing when deleting a folder which doesn't exist", () => {
    // Arrange
    const fileSystem = new FileSystem();
    fileSystem.addFolder();

    // Act
    fileSystem.deleteFolder("definitely-n0t-a-folder-as-it-has-numb3rs");

    // Assert
    expect(fileSystem.folderCount).toBe(1);
  });

  test("should delete the given folder", () => {
    // Arrange
    const fileSystem = new FileSystem();
    fileSystem.addFolder();
    fileSystem.addFolder("to-delete");
    fileSystem.addFolder();

    // Act
    fileSystem.deleteFolder("to-delete");

    // Assert
    expect(fileSystem.folderCount).toBe(2);
  });
});

describe("file paths", () => {
  test("should return null file path if the file does not exist", () => {
    // Arrange
    const fileSystem = new FileSystem();

    const firstFolder = fileSystem.addFolder("first");
    const secondFolder = firstFolder.addFolder("second");
    const thirdFolder = secondFolder.addFolder("third");
    thirdFolder.addFile("file!.txt");

    // Act
    const filePath = thirdFolder.filePathFor("file.txt");

    // Assert
    expect(filePath).toBe(null);
  });

  test("should return the full file path for a given file", () => {
    // Arrange
    const fileSystem = new FileSystem();

    const firstFolder = fileSystem.addFolder("first");
    firstFolder.addFolder();
    const secondFolder = firstFolder.addFolder("second");
    secondFolder.addFolder();
    const thirdFolder = secondFolder.addFolder("third");
    thirdFolder.addFolder();
    thirdFolder.addFile("file!.txt");

    // Act
    const filePath = thirdFolder.filePathFor("file!.txt");

    // Assert
    expect(filePath).toBe("/first/second/third/file!.txt");
  });
});

describe("toString", () => {
  test("should pretty print a complex file system", () => {
    // Arrange
    const employees = new FileSystem();
    employees.addFile("Hudson");
    employees.addFile("Harry");

    const teams = employees.addFolder("teams");

    const lambdaghinis = teams.addFolder("lambdaghinis");
    lambdaghinis.addFile("Harper");

    const lambdaDevs = lambdaghinis.addFolder("devs");
    lambdaDevs.addFile("Henry");
    lambdaDevs.addFile("Hazel");
    lambdaDevs.addFile("Hannah");
    lambdaDevs.addFile("Hunter");

    const bits = teams.addFolder("bits");
    bits.addFile("Hayden");

    const bitsDevs = bits.addFolder("devs");
    bitsDevs.addFile("Hailey");
    bitsDevs.addFile("Harmony");

    // Act
    const result = employees.toString();

    // Assert
    expect(result).toBe(
`teams
| lambdaghinis
| | devs
| | | Henry
| | | Hazel
| | | Hannah
| | | Hunter
| | Harper
| bits
| | devs
| | | Hailey
| | | Harmony
| | Hayden
Hudson
Harry
`
    );
  });
});
