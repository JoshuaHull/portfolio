# Portfolio

Somewhat interactive portfolio which shows off skills I've accumulated over the years.

## Rush

This is a [Rush](https://rushjs.io/) monorepo.

Run the skills app:  
`rush dev --to skills`

Run the homepage:  
`rush dev --to homepage`

Add a package to an existing app:  
`cd ./apps/{app}`  
`rush add -p {package} [--dev]`

## Apps

[Homepage](./apps/homepage/README.md) - single file site from which all apps are linked.

[Skills](./apps/skills/README.md) - Vue app with interactive demos of some of my skills.

## Packages

### Auto Component plugins

[hero-icon-resolver](./libs/hero-icon-resolver/README.md) - automatically resolves [Hero Icon](https://heroicons.com/) components in Vue apps

[@types/hero-icon-resolver](./types/hero-icon-resolver/README.md) - Typescript definitions for hero-icon-resolver

### Rollup plugins

[rollup-plugin-content](./libs/rollup-plugin-content/README.md) - import a file's content into a Javascript variable

[@types/rollup-plugin-content](./types/rollup-plugin-content/README.md) - Typescript definitions for rollup-plugin-content

[rollup-plugin-count](./libs/rollup-plugin-count/README.md) - import a Javascript variable equal to the number of files in the build which have a given file extension

[@types/rollup-plugin-count](./types/rollup-plugin-count/README.md) - Typescript definitions for rollup-plugin-count

[rollup-plugin-html-minify](./libs/rollup-plugin-html-minify/README.md) - very simply HTML minifier

[@types/rollup-plugin-html-minify](./types/rollup-plugin-html-minify/README.md) - Typescript definitions for rollup-plugin-html-minify

### Vite plugins

[vite-plugin-replace](./libs/vite-plugin-replace/README.md) - replace a string at build time with another string

[@types/vite-plugin-replace](./types/vite-plugin-replace/README.md) - Typescript definitions for vite-plugin-replace

### Vue composables

[use-vanishing-value](./composables/use-vanishing-value/README.md) - Vue composable which yields a `Ref<T | null>` object and a function to push new ephemeral values to that object

[use-vanishing-values](./composables/use-vanishing-values/README.md) - extends use-vanishing-value to support tracking multiple values at once
