# rollup-plugin-handlebars-compile

Import the contents of a HTML file, after having run `Handlebars.compile()` over it.

Does not currently support passing props to `Handlebars.compile()` but I'll get to it.

## Usage

The import location must be prefixed with "compile:", followed by the file extension,
followed by the path to the file.

Eg.,
```js
import myCompiledFile from "compile:html:src/files/myFile";
```

From there, you can treat the variable like any other. For example, displaying the
content in a Vue component:

```html
<pre>{{ myCompiledFile }}</pre>
```
