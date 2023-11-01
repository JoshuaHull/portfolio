# Portfolio

Somewhat interactive portfolio which shows off skills I've accumulated over the years.

This is a source-available project; it's not open-source. However, the packages listed below are open-source.

## Rush

This is a [Rush](https://rushjs.io/) monorepo.

## Apps

[Homepage](./apps/homepage) - single file site from which all apps are linked

[Skills](./apps/skills) - Vue app with interactive demos of some of my skills

## Packages (MIT)

### Components

<img src="./common/assets/npm-logo.png" height="16" alt="Available on NPM" /> [web-components](./components/web-components) - web components structured in such a way which enables both server side and client side rendering

[web-components-storybook-vue](./components/web-components-storybook-vue) - Storybook app demonstrating use of web-components in a Vue app

### Eslint plugins

<img src="./common/assets/npm-logo.png" height="16" alt="Available on NPM" /> [eslintpluginbuilder](./libs/eslintpluginbuilder-layered-architecture) - build up Eslint plugins which enforce layering of your code

<img src="./common/assets/npm-logo.png" height="16" alt="Available on NPM" /> [eslint-plugin-architected](./libs/eslint-plugin-architected) - enforce layering your code following my personal preferences, based on Jason Taylor's Clean Architecture

<img src="./common/assets/npm-logo.png" height="16" alt="Available on NPM" /> [eslint-plugin-clean-architecture](./libs/eslint-plugin-clean-architecture) - enforce layering your code following Jason Taylor's Clean Architecture

### Lexing

[csharp-lexer](./libs/csharp-lexer/) - a C# lexer deriving from re-lex-ation

[highlighter-html](./libs/highlighter-html) - extracts all the tokens from a lexer and maps them to a HTML string

[highlighter-vue](./libs/highlighter-vue) - extracts all the tokens from a lexer and maps them to a VNode

[re-lex-ation](./libs/re-lex-ation/) - a no-fuss base lexer which might work for any language

[typescript-lexer](./libs/typescript-lexer/) - a Typescript lexer deriving from re-lex-ation

[vue-lexer](./libs/vue-lexer/) - a Vue lexer deriving from re-lex-ation

### Rollup plugins

[rollup-plugin-auto-package-json](./libs/rollup-plugin-auto-package-json) - copies `package.json`, removes some fields, and dumps it in `dist`

<img src="./common/assets/npm-logo.png" height="16" alt="Available on NPM" />  [rollup-plugin-content-chunks](./libs/rollup-plugin-content-chunks) - import a file's content into a Javascript variable

[rollup-plugin-copy](./libs/rollup-plugin-copy) - copy a file or group of files to another location

[rollup-plugin-count](./libs/rollup-plugin-count) - import a Javascript variable equal to the number of files in the build which have a given file extension

[rollup-plugin-handlebars-compile](./libs/rollup-plugin-handlebars-compile) - import the contents of a file, having run it through `Handlebars.compile()` at build time

[rollup-plugin-html-minify](./libs/rollup-plugin-html-minify) - very simple HTML minifier

[rollup-plugin-prepare-dist](./libs/rollup-plugin-prepare-dist) - simply deletes and re-creates the `dist` folder

### unplugin-vue-components plugins

<img src="./common/assets/npm-logo.png" height="16" alt="Available on NPM" /> [hero-icon-resolver](./libs/hero-icon-resolver) - automatically resolves [Hero Icon](https://heroicons.com/) components in Vue apps

### Vite plugins

[vite-plugin-replace](./libs/vite-plugin-replace) - replace a string at build time with another string

### Vue composables

[use-vanishing-value](./composables/use-vanishing-value) - Vue composable which yields a `Ref<T | null>` object and a function to push new ephemeral values to that object

[use-vanishing-values](./composables/use-vanishing-values) - Vue composable which yields a `Ref<T[] | null>` object and a function to push new ephemeral values onto the queue
