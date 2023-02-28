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

  public getUnstagedChanges(): UnstagedChange[] {

    return [];
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
