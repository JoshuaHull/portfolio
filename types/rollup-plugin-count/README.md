# @types/rollup-plugin-count

Typescript definitions for [rollup-plugin-count](./../../libs/rollup-plugin-count).

## shim

Due to the custom nature of importing a count value, Typescript produces the following error:
`Cannot find module 'count:' or its corresponding type declarations.`

So we include the following shim in the root folder:

```ts
// rollup-plugin-count-env.d.ts
declare module "count:*" {
  export default {}
}
```
