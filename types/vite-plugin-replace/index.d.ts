import { IndexHtmlTransformHook } from "vite";

export type VitePluginReplaceOptions = {
  replace: string;
  with: string;
};

export function vitePluginReplace(options: VitePluginReplaceOptions): IndexHtmlTransformHook;
