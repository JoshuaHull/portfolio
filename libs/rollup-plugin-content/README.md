# rollup-plugin-content

Import a file's content into a Javascript variable.

## Usage

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
