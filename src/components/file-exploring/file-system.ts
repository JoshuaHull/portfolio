type Folders = { [name: string]: FileSystem };

export class FileSystem {
  public name: string | null = null;
  public files: string[] = [];
  public folders: Folders = {};
  private parentFolder: FileSystem | null = null;

  public get folderNames(): string[] {
    return Object.keys(this.folders);
  }

  public get folderCount(): number {
    return this.folderNames.length;
  }

  public get fileCount(): number {
    return this.files.length;
  }

  public addFile(name: string | undefined = undefined): string {
    const fileName = name ?? this.getRandomName();

    this.files.push(fileName);

    return fileName;
  }

  public addFolder(name: string | undefined = undefined): FileSystem {
    const folderName = name ?? this.getRandomName();

    const folder = new FileSystem();
    folder.name = folderName;
    folder.parentFolder = this;

    this.folders[folderName] = folder;

    return folder;
  }

  public deleteFile(file: string): void {
    const idx = this.files.indexOf(file);

    if (idx < 0)
      return;

    this.files.splice(idx, 1);
  }

  public deleteFolder(folder: string): void {
    delete this.folders[folder];
  }

  public up(): FileSystem | null {
    return this.parentFolder;
  }

  public filePathFor(fileName: string): string | null {
    if (!this.files.includes(fileName))
      return null;

    let filePath = fileName;
    let currentFolder: FileSystem = this;

    while (currentFolder.parentFolder !== null) {
      filePath = `${currentFolder.name}/${filePath}`;
      currentFolder = currentFolder.parentFolder;
    }

    return `/${filePath}`;
  }

  public listAllFilePaths(): string[] {
    let rtn = this.files.map(f => this.filePathFor(f)!);

    for (let folderName of this.folderNames) {
      const folder = this.folders[folderName];
      rtn = rtn.concat(folder.listAllFilePaths());
    }

    return rtn;
  }

  private getRandomName() {
    const idx = () => Math.floor(Math.random() * words.length);
    return `${words[idx()]}-${words[idx()]}`;
  }

  private staggeredToString(stagger: string): string {
    if (this.folderCount === 0 && this.files.length === 0)
      return "";

    let rtn = stagger;

    for (let i = 0; i < this.folderCount; i += 1) {
      const s = i > 0 ? stagger : "";
      const folderName = this.folderNames[i];
      rtn += `${s}${folderName}\n${this.folders[folderName].staggeredToString(`| ${stagger}`)}`;
    }

    for (let i = 0; i < this.fileCount; i += 1) {
      const s = i > 0 || this.folderCount > 0 ? stagger : "";
      const fileName = this.files[i];
      rtn += `${s}${fileName}\n`;
    }

    return rtn;
  }

  public toString(): string {
    return this.staggeredToString("");
  }
}

const words = [
  "vacation", "mine", "truthful", "condition", "outrageous", "elegant", "carve",
  "head", "spotty", "wash", "growth", "belong", "back", "naive", "attraction",
  "tangible", "addition", "size", "cagey", "mindless", "wound", "approval",
  "longing", "vanish", "collar", "abusive", "cowardly", "peaceful", "wrap",
  "angry", "thundering", "art", "bless", "scent", "damp", "oven", "innocent",
  "faint", "penitent", "thinkable", "wonderful", "ink", "puncture", "unique",
  "advice", "rest", "view", "plucky", "try", "dinosaurs", "scribble", "gaudy",
  "rot", "tenuous", "crazy", "demonic", "expect", "wrong", "thumb", "crawl",
  "crate", "disagree", "spicy", "cabbage", "comparison", "wrestle", "appliance",
  "cactus", "salt", "holiday", "rub", "ugly", "gray", "tiresome", "brawny",
  "fluttering", "suspect", "theory", "consist", "cheat", "roll", "enthusiastic",
  "son", "rice", "ball", "range", "work", "uncovered", "engine", "tricky",
  "history", "enter", "pencil", "mug", "activity", "malicious", "grin",
];
