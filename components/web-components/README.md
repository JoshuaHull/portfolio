# web-components

Web components structured in such a way which enables both server side and client side rendering. These components support not only the apps in this repo, but other repos of mine too.

## Warning

This package is in early early access. Don't install it into anything long-lived.

## Storybook

There is a Storybook app for these components [here](./../web-components-storybook-vue/). It wraps each component with a Vue component because that's easier than trying to get Storybook to play nice with web components (afaik). The components do not actually depend on Vue.

## Installation

```sh
npm i @fullstackjosh/web-components
```

## Usage

Import and the client-side version of any component:

```jsx
import { registerXYZComponent } from "@fullstackjosh/web-components/XYZComponent";

registerXYZComponent();

// this is a web component which relies on the shadow dom and therefore cannot be rendered server-side
return <fsj-xyz-component></fsj-xyz-component>;
```

And the equivalent server-side version:

```js
import { getXYZComponentTemplate } from "@fullstackjosh/web-components/XYZComponentTemplate";

const template = getXYZComponentTemplate();

// this is a html string with styles included which you can serve to the user
const html = template({
  ...props,
});
```
