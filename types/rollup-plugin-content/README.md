# @types/rollup-plugin-content

Typescript definitions for [rollup-plugin-content](./../../libs/rollup-plugin-content).

## shim

Due to the custom nature of importing a content value, Typescript produces the following error:
`Cannot find module 'content:' or its corresponding type declarations.`

So we include the following shim in the root folder:

```ts
// rollup-plugin-content-env.d.ts
declare module "content:*" {
  export default {}
}
```
