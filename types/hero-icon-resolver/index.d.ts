import { ComponentResolveResult } from "unplugin-vue-components";

declare function heroIconResolver(name: string): ComponentResolveResult;
declare namespace heroIconResolver {}

export = heroIconResolver;
