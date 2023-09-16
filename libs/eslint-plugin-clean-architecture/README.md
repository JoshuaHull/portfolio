# eslint-plugin-clean-architecture

Enforce layering your code following [Jason Taylor's Clean Architecture](https://jasontaylor.dev/clean-architecture-getting-started/).

![Taylor, J. 2020. Clean Architecture Diagram](https://github.com/JoshuaHull/portfolio/tree/main/libs/eslint-plugin-clean-architecture/clean-architecture-diagram.webp)

There are four configurations available:
* plugin:clean-architecture/strict
* plugin:clean-architecture/strictWithNumbers
* plugin:clean-architecture/loose
* plugin:clean-architecture/looseWithNumbers

Strict configurations follow Jason Taylor's clean architecture exactly as he presented it.

Numbered configurations prefix each layer with "1-", "2-", etc. This helps organise the layers visually to match the way they are stacked logically.

Loose configurations allow the presentation layer to reference the infrastructure layer. This is handy for bootstrapping your dependencies, factories, etc.

## Usage

```js
// .eslintrc.js

module.exports = {
  extends: ["plugin:clean-architecture/strict"],
};
```

You will only be able to import code from layer X to layer Y if layer X depends on layer Y. Any other layer-to-layer import will yield a linting error.

For example:

```js
// application/business-logic.js

import { apiMethod } from "../presentation/api";
// error: Do not import presentation code into the application layer
```

## Folder structure

### plugin:clean-architecture/strict

```
layered-code
| presentation
| infrastructure
| application
| domain
```

### plugin:clean-architecture/strictWithNumbers

```
layered-code
| 1-presentation
| 1-infrastructure
| 2-application
| 3-domain
```

Note that the presentation layer is prefixed with "0-" for `looseWithNumbers` but "1-" for `strictWithNumbers`.

### plugin:clean-architecture/loose

```
layered-code
| presentation
| infrastructure
| application
| domain
```

### plugin:clean-architecture/looseWithNumbers

```
layered-code
| 0-presentation
| 1-infrastructure
| 2-application
| 3-domain
```

Note that the presentation layer is prefixed with "0-" for `looseWithNumbers` but "1-" for `strictWithNumbers`.
