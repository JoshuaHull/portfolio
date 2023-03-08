import { FileSystem } from "@file-exploring";

export type Modification = "Create" | "Delete";

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

export class Commit {
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

  public stageChange(filePath: string): void {
    const unstagedChanges = this.getUnstagedChanges();

    const changeForFilePath = unstagedChanges.filter(c => c.filePath === filePath);

    if (changeForFilePath.length === 0)
      return;

    this.stagedChanges.push({
      modification: changeForFilePath[0].modification,
      filePath,
    });
  }

  public unstageChange(filePath: string): void {
    this.stagedChanges = this.stagedChanges
      .filter(c => c.filePath !== filePath);
  }

  public stageAllChanges(): void {
    const unstagedChanges = this.getUnstagedChanges();

    for (let unstagedChange of unstagedChanges) {
      const { filePath, modification } = unstagedChange;

      this.stagedChanges.push({
        filePath,
        modification,
      });
    }
  }

  public unstageAllChanges(): void {
    this.stagedChanges = [];
  }

  private getExpectedSetOfFilePaths(commit: Commit | null = this.head): string[] {
    if (commit === null)
      return [];

    const rtn = this.getExpectedSetOfFilePaths(commit.parent);

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

    const unstagedChanges = unstagedCreations.concat(unstagedDeletions);

    for (let staged of this.stagedChanges) {
      const idx = unstagedChanges.findIndex(unstaged => unstaged.filePath === staged.filePath);

      if (idx < 0)
        continue;

      unstagedChanges.splice(idx, 1);
    }

    return unstagedChanges;
  }

  public commit(message: string | undefined = undefined) {
    if (this.stagedChanges.length === 0)
      return;

    const commit = new Commit(message ?? this.generateCommitMessageForCurrentlyStagedChanges());
    commit.changes = [...this.stagedChanges];
    commit.parent = this.head;
    this.root ??= commit;
    this.head = commit;
    this.stagedChanges = [];
  }

  private generateCommitMessageForCurrentlyStagedChanges = () => {
    if (this.stagedChanges.length === 0)
      return "committed something";

    let rtn = "";

    const created = this.stagedChanges.filter(c => c.modification === "Create");
    const deleted = this.stagedChanges.filter(c => c.modification === "Delete");

    if (created.length > 0)
      rtn += `created ${created.length} file${created.length === 1 ? "" : "s"}`;

    if (created.length > 0 && deleted.length > 0)
      rtn += ", ";

    if (deleted.length > 0)
      rtn += `deleted ${deleted.length} file${deleted.length === 1 ? "" : "s"}`;

    return rtn;
  };
}
