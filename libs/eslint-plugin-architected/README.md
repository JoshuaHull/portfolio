# eslint-plugin-architected

Enforce layering your code following my personal preferences, based on [Jason Taylor's Clean Architecture](https://jasontaylor.dev/clean-architecture-getting-started/).

If you'd like a more strict implementation of clean architecture, checkout [eslint-plugin-clean-architecture](./../eslint-plugin-clean-architecture).

## Usage

```js
// .eslintrc.js

module.exports = {
  extends: ["plugin:architected/clean-ish"],
};
```

You will only be able to import code from layer X to layer Y if layer X depends on layer Y. Any other layer-to-layer import will yield a linting error.

For example:

```js
// 2-application/business-logic.js

import { apiMethod } from "../1-presentation/api";
// error: Do not import 1-presentation code into the 2-application layer
```

## Folder structure

```
layered-code
| 0-presentation
| 1-infrastructure
| 2-application
| 3-domain
| 4-data
```
