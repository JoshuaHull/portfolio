# Portfolio

Somewhat interactive portfolio which shows off skills I've accumulated over the years.

## Rush

This is a [Rush](https://rushjs.io/) monorepo.

Run the homepage:  
`rush dev --to homepage`

Run the skills app:  
`rush dev --to skills`

Add a package to an existing app:  
`cd ./apps/{app}`  
`rush add -p {package} [--dev]`

## Apps

[Homepage](./apps/homepage) - single file site from which all apps are linked

[Skills](./apps/skills) - Vue app with interactive demos of some of my skills

## Packages

### Auto Component plugins

[hero-icon-resolver](./libs/hero-icon-resolver) - automatically resolves [Hero Icon](https://heroicons.com/) components in Vue apps

### Lexing

[csharp-lexer](./libs/csharp-lexer/) - a C# Lexer deriving from re-lex-ation

[re-lex-ation](./libs/re-lex-ation/) - a no-fuss, kinda dumb, kinda bad base lexer which might work for any language

[typescript-lexer](./libs/typescript-lexer/) - a Typescript Lexer deriving from re-lex-ation

[vue-lexer](./libs/vue-lexer/) - a Vue Lexer deriving from re-lex-ation

### Rollup plugins

[rollup-plugin-content](./libs/rollup-plugin-content) - import a file's content into a Javascript variable

[rollup-plugin-count](./libs/rollup-plugin-count) - import a Javascript variable equal to the number of files in the build which have a given file extension

[rollup-plugin-html-minify](./libs/rollup-plugin-html-minify) - very simple HTML minifier

### Vite plugins

[vite-plugin-replace](./libs/vite-plugin-replace) - replace a string at build time with another string

### Vue composables

[use-vanishing-value](./composables/use-vanishing-value) - Vue composable which yields a `Ref<T | null>` object and a function to push new ephemeral values to that object

[use-vanishing-values](./composables/use-vanishing-values) - extends use-vanishing-value to support tracking multiple values at once

### Typescript definitions

[@types/hero-icon-resolver](./types/hero-icon-resolver) - Typescript definitions for hero-icon-resolver

[@types/rollup-plugin-content](./types/rollup-plugin-content) - Typescript definitions for rollup-plugin-content

[@types/rollup-plugin-count](./types/rollup-plugin-count) - Typescript definitions for rollup-plugin-count

[@types/rollup-plugin-html-minify](./types/rollup-plugin-html-minify) - Typescript definitions for rollup-plugin-html-minify

[@types/use-vanishing-value](./types/use-vanishing-value) - Typescript definitions for use-vanishing-value

[@types/use-vanishing-values](./types/use-vanishing-values) - Typescript definitions for use-vanishing-values

[@types/vite-plugin-replace](./types/vite-plugin-replace) - Typescript definitions for vite-plugin-replace
