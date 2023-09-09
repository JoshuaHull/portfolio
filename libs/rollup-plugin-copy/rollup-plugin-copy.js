import { PathScurry } from "path-scurry";
import fs from "fs/promises";

const name = "rollup-plugin-copy";

/**
 * @type {import("./rollup-plugin-copy").rollupPluginCopy}
 */
export function rollupPluginCopy({
  from,
  to,
}) {
  return {
    name,
    async buildEnd() {
      const fromContainsStar = from.includes("*");
      const toContainsStar = to.includes("*");

      if (fromContainsStar !== toContainsStar)
        throw new Error("Invalid options: either 'from' and 'to' must both contain '*', or neither of them should.");

      if (fromContainsStar)
        await copyAllMatchingFiles(from, to);
      else
        await copySingleFile(from, to);
    },
  };
}

/**
 * @param {string} from
 * @param {string} to
 */
async function copyAllMatchingFiles(from, to) {
  const fromParts = from.split("*");
  const toParts = to.split("*");

  if (fromParts.length !== 2 || toParts.length !== 2)
    throw new Error("Invalid options: 'from' and 'to' may contain '*' exactly once each.");

  const [fromPrefix, fromSuffix] = fromParts;
  const [toPrefix, toSuffix] = toParts;

  const fromFolder = new PathScurry(fromPrefix);
  const fromFolderStat = await fromFolder.lstat();

  if (!fromFolderStat)
    throw new Error(`Invalid options: '${fromPrefix}' does not exist.`);

  if (!fromFolderStat.isDirectory())
    throw new Error(`Invalid options: '${fromPrefix}' is not a directory.`);

  const toFolder = new PathScurry(toPrefix);
  const toFolderStat = await toFolder.lstat();

  if (!toFolderStat)
    await fs.mkdir(toFolder.cwd.fullpath());

  if (toFolderStat && !toFolderStat.isDirectory())
    throw new Error(`Invalid options: '${toPrefix}' is not a directory.`);

  let copyCount = 0;

  for await (const entry of fromFolder) {
    const entryPath = entry.fullpath();
    const entryInFromFolder = entryPath.substring(fromPrefix.length);

    if (!entryInFromFolder.endsWith(fromSuffix))
      continue;

    const starredPathPart = entryInFromFolder.substring(0, entryInFromFolder.length - fromSuffix.length);

    if (starredPathPart.length === 0) {
      console.warn("Can't decide right now if this works nicely, skipping, might change it");
      continue;
    }

    if (starredPathPart.includes("/") || starredPathPart.includes("\\")) {
      console.warn("Can't handle complex paths right now");
      continue;
    }

    const copyingTo = `${toPrefix}${starredPathPart}${toSuffix}`;

    const parentFolder = new PathScurry(`${toPrefix}${starredPathPart}`);

    if (!parentFolder.cwd.isDirectory())
      await fs.mkdir(parentFolder.cwd.fullpath());

    await fs.copyFile(entryPath, copyingTo);

    copyCount += 1;
  }

  if (copyCount === 0) {
    console.warn(`Didn't copy any files from '${fromPrefix}' to '${toPrefix}'`);
    return;
  }

  console.log(`Copied ${copyCount} file${copyCount === 1 ? "" : "s"}`);
}

/**
 * @param {string} from
 * @param {string} to
 */
async function copySingleFile(from, to) {
  await fs.copyFile(from, to);
}
