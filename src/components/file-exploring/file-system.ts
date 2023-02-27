type Folders = { [name: string]: FileSystem };

export class FileSystem {
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

  private getRandomName() {
    let fileName = "";

    for (let i = 0; i < 3; i += 1)
      fileName += words[Math.floor(Math.random() * words.length)];

    return fileName;
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

  toString(): string {
    return this.staggeredToString("");
  }
}

const words = [
  "vacation", "mine", "truthful", "condition", "outrageous", "elegant", "carve",
  "head", "spotty", "wash", "growth", "belong", "back", "naive", "attraction",
  "tangible", "addition", "size", "cagey", "mindless", "wound", "approval",
  "longing", "vanish", "collar", "well-made", "abusive", "cowardly", "peaceful",
  "wrap", "angry", "thundering", "art", "bless", "scent", "damp", "oven",
  "innocent", "faint", "penitent", "thinkable", "wonderful", "ink", "puncture",
  "unique", "advice", "rest", "view", "plucky", "try", "dinosaurs", "scribble",
  "gaudy", "rot", "tenuous", "crazy", "demonic", "expect", "wrong", "thumb",
  "bloody", "crawl", "crate", "disagree", "spicy", "cabbage", "comparison",
  "wrestle", "appliance", "cactus", "salt", "holiday", "rub", "ugly", "gray",
  "tiresome", "brawny", "fluttering", "black-and-white", "suspect", "theory",
  "consist", "cheat", "roll", "enthusiastic", "son", "rice", "ball", "range",
  "work", "uncovered", "engine", "tricky", "history", "enter", "pencil", "mug",
  "activity", "malicious", "grin",
];