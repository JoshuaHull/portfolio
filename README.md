# Portfolio

Somewhat interactive portfolio which shows off skills I've accumulated over the years.

This is a source-available project; it's not open-source. However, the packages listed below are open-source.

## Rush

This is a [Rush](https://rushjs.io/) monorepo.

## Apps

[Homepage](./apps/homepage) - single file site from which all apps are linked

[Skills](./apps/skills) - Vue app with interactive demos of some of my skills

## Packages (MIT)

### Lexing

[csharp-lexer](./libs/csharp-lexer/) - a C# lexer deriving from re-lex-ation

[highlighter](./libs/highlighter) - extracts all the tokens from a lexer and maps them to a VNode

[re-lex-ation](./libs/re-lex-ation/) - a no-fuss base lexer which might work for any language

[typescript-lexer](./libs/typescript-lexer/) - a Typescript lexer deriving from re-lex-ation

[vue-lexer](./libs/vue-lexer/) - a Vue lexer deriving from re-lex-ation

### Rollup plugins

[rollup-plugin-auto-package-json](./libs/rollup-plugin-auto-package-json) - Copies `package.json`, removes some fields, and dumps it in `dist`.

[rollup-plugin-content](./libs/rollup-plugin-content) - import a file's content into a Javascript variable

[rollup-plugin-copy](./libs/rollup-plugin-copy) - copy a file or group of files to another location

[rollup-plugin-count](./libs/rollup-plugin-count) - import a Javascript variable equal to the number of files in the build which have a given file extension

[rollup-plugin-handlebars-compile](./libs/rollup-plugin-handlebars-compile) - Import the contents of a HTML file, having run it through `Handlebars.compile()` at build time

[rollup-plugin-html-minify](./libs/rollup-plugin-html-minify) - very simple HTML minifier

### unplugin-vue-components plugins

[hero-icon-resolver](./libs/hero-icon-resolver) - automatically resolves [Hero Icon](https://heroicons.com/) components in Vue apps

### Vite plugins

[vite-plugin-replace](./libs/vite-plugin-replace) - replace a string at build time with another string

### Vue composables

[use-vanishing-value](./composables/use-vanishing-value) - Vue composable which yields a `Ref<T | null>` object and a function to push new ephemeral values to that object

[use-vanishing-values](./composables/use-vanishing-values) - Vue composable which yields a `Ref<T[] | null>` object and a function to push new ephemeral values onto the queue
