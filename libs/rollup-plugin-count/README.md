# rollup-plugin-count

Import a Javascript variable equal to the number of files in the build which have a given file extension.

## Usage

The import location must be prefixed with "count:", followed by a file extension.

Eg.,
```js
import javascriptFileCount from "count:js";
```

From there, you can treat the variable like any other. For example, displaying the
count in a Vue component:

```html
<pre>{{ javascriptFileCount }}</pre>
```
