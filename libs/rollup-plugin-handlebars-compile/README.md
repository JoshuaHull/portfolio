# rollup-plugin-handlebars-compile

Import the contents of a HTML file, having run it through `Handlebars.compile()` at build time.

## Usage

Start by adding the plugin to your `vite.config.{ts|js}`.

```js
// vite.config.js
import { defineConfig } from "vite";
import { rollupPluginHandlebarsCompile } from "rollup-plugin-handlebars-compile";

export default defineConfig({
  plugins: [
    rollupPluginHandlebarsCompile({
      // options object is optional
      vars: {
        compilerName: "Handlebars",
      },
    }),
  ],
});
```

The import location must be prefixed with "compile:", followed by the file extension, followed by the path to the file.

For example:

```js
// src/sourceCode.js
import myCompiledFile from "compile:html:src/files/myFile";
```

Which is used to import a template:
```html
<!-- src/files/myFile.html -->
<div>
  This is a {{compilerName}} template.
</div>
```


From there, you can treat the variable like any other. For example, displaying the content in a React component:

```html
<!-- SomeComponent.jsx -->
<div dangerouslySetInnerHTML= {{ __html: myCompiledFile }}></div>
```

Will produce:

```html
<!-- your browser -->
<div><div>This is a Handlebars template.</div></div>
```

Since the compilation runs at build time, I recommend using this for cases where you don't actually want variables populated in the template, and instead want them replaced with nothing. For me, that's useful to assist with server side rendering of web components. You can see an example [here](../../components/web-components/).
