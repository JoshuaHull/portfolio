import { Plugin } from "rollup";

export type ContentChunksOptions = {
  fileLineSeparator: string;
  outputLineSeparator: string;
  relativeTo?: string;
};

export function rollupPluginContentChunks(options?: ContentChunksOptions): Plugin;
