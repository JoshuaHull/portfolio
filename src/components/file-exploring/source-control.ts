import { FileSystem } from "./file-system";

type Modification = "Create" | "Delete";

type UnstagedChange = {
  modification: Modification;
  filePath: string;
};

type StagedChange = {
  modification: Modification;
  filePath: string;
};

type CommittedChange = {
  modification: Modification;
  filePath: string;
};

class Commit {
  public parent: Commit | null = null;
  public changes: CommittedChange[] = [];

  constructor(
    public message: string,
  ) {}

  public toString(): string {
    let rtn = this.message;

    for (let change of this.changes) {
      let mod = "";

      switch (change.modification) {
        case "Create":
          mod = "+++";
          break;
        case "Delete":
          mod = "---";
          break;
      }

      rtn += `\n${mod} ${change.filePath}`;
    }

    const p = this.parent?.toString() ?? "";

    return `${rtn}\n${p}`;
  }
}

export class SourceControl {
  public stagedChanges: StagedChange[] = [];
  public root: Commit | null = null;
  public head: Commit | null = null;

  constructor(
    private fileSystem: FileSystem,
  ) {}

  public stageChange(change: UnstagedChange): void {
    const { modification, filePath } = change;
    const existingStagedChanges = this.stagedChanges.filter(c => c.filePath === change.filePath && c.modification === change.modification);

    if (existingStagedChanges.length > 0)
      return;

    this.stagedChanges.push({
      modification,
      filePath,
    });
  }

  public unstageChange(change: StagedChange): void {
    this.stagedChanges = this.stagedChanges
      .filter(c => c.filePath !== change.filePath || c.modification !== change.modification);
  }

  private getExpectedSetOfFilePaths(commit: Commit | null = this.head): string[] {
    if (commit === null)
      return [];

    let rtn = this.getExpectedSetOfFilePaths(commit.parent);

    for (let change of commit.changes) {
      switch (change.modification) {
        case "Create":
          rtn.push(change.filePath);
          break;
        case "Delete":
          const idx = rtn.findIndex(p => p === change.filePath);

          if (idx < 0)
            break;

          rtn.splice(idx, 1);
          break;
      }
    }

    return rtn;
  }

  public getUnstagedChanges(): UnstagedChange[] {
    const expectedFilePaths = this.getExpectedSetOfFilePaths();
    const allFilePaths = this.fileSystem.listAllFilePaths();

    const unstagedDeletions: UnstagedChange[] = [];
    const unstagedCreations: UnstagedChange[] = [];

    for (let filePath of expectedFilePaths) {
      if (allFilePaths.includes(filePath))
        continue;

      unstagedDeletions.push({
        filePath,
        modification: "Delete",
      });
    }

    for (let filePath of allFilePaths) {
      if (expectedFilePaths.includes(filePath))
        continue;

      unstagedCreations.push({
        filePath,
        modification: "Create",
      });
    }

    return unstagedCreations.concat(unstagedDeletions);
  }

  public commit(message: string | undefined = undefined) {
    const commit = new Commit(message ?? "new commit!");
    commit.changes = [...this.stagedChanges];
    commit.parent = this.head;
    this.root ??= commit;
    this.head = commit;
    this.stagedChanges = [];
  }
}
