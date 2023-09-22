# eslintpluginbuilder-layered-architecture

Build up Eslint plugins which enforce layering of your code. For a usage example and rationale, see [eslint-plugin-clean-architecture]("./../../eslint-plugin-clean-architecture).

## Installation

```
npm i eslintpluginbuilder-layered-architecture
```

## Usage

Create an Eslint plugin, and return the output of the builder as a config object.

```js
// eslint-plugin-my-architecture.js

import { EslintPluginBuilderLayeredArchitecture } from "eslintpluginbuilder-layered-architecture";

const getConfig = () => {
  return new EslintPluginBuilderLayeredArchitecture()
    .withLayer("first-layer")
    .withLayer("second-layer", ["first-layer"])
    .withLayer("third-layer", ["second-layer", "first-layer"])
    //          ^ layer name    ^ third-layer depends on these layers
    .withLayer("sibling-layer", ["first-layer"])
    .build("my-architecture");
};

module.exports = {
  configs: {
    "enforce": getConfig(),
  },
};
```

Then imagine you have a folder structure like so:

```
my-project
| first-layer
| | l1-code.js
| second-layer
| | l2-code.js
| third-layer
| | l3-code.js
| sibling-layer
| | ls-code.js
```

You will only be able to import code from layer X to layer Y if layer X depends on layer Y. Any other layer-to-layer import will yield a linting error.

For example:

```js
// first-layer/l1-code.js

import { l2Code } from "../second-layer/l2-code";
// error: Do not import second-layer code into first-layer
```

```js
// second-layer/l2-code.js

import { l1Code } from "../first-layer/l1-code";
// no error, totally fine
```
