# rollup-plugin-content-chunks

Import a file's content into a Javascript variable. You may also import a chunk of content from a file, rather than the whole thing.

## Usage

```js
// vite.config.js

import { resolve } from "path";
import { defineConfig } from "vite";
import { rollupPluginContentChunks } from "rollup-plugin-content-chunks";

export default defineConfig({
  plugins: [
    rollupPluginContentChunks(),
  ],
});
```

### Whole Files

The import location must be prefixed with "content:", followed by the file extension,
followed by the path to the file.

Eg.,
```js
import myFileContent from "content:js:src/files/myFile";
```

From there, you can treat the variable like any other. For example, displaying the
content in a Vue component:

```html
<pre>{{ myFileContent }}</pre>
```

### Chunks

This plugin also supports retrieving a chunk of a file.

Eg., for a given file:

```js
1 | // src/files/myFile.js
2 | export function trim(input) {
3 |   return input.trim();
4 | }
5 |
6 | export function toLowerCase(input) {
7 |   return input.toLowerCase();
8 | }
```

Then, importing only the first function's content into a variable:

```js
import aChunkOfFileContent from "content:js@2,5:src/files/myFile";
```

Will yield the following:

```js
aChunkOfFileContent === "export function trim(input) {\nreturn input.trim();\n}"
```

### \r\n

To build a chunk, this plugin splits the file contents on "\n", pulls out the requested lines, then assembles the chunk with "\n". You can override the line separators used in case your target files use "\r\n".

```js
// vite.config.js

import { resolve } from "path";
import { defineConfig } from "vite";
import { rollupPluginContentChunks } from "rollup-plugin-content-chunks";

export default defineConfig({
  plugins: [
    rollupPluginContentChunks({
      fileLineSeparator: "\r\n",
      outputLineSeparator: "\n",
    }),
  ],
});
```

Currently, these options apply to all files imported through this plugin.