# rollup-plugin-content

Import a file's content into a Javascript variable.

## Usage

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
