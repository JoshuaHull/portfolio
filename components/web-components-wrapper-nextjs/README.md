# web-components-wrapper-nextjs

A wrapper around [web-components](./../web-components) which allows those components to be rendered on the server of a NextJS app.

## Installation

Start by obtaining this repository:
```sh
git clone https://github.com/JoshuaHull/portfolio.git
```

Prepare the repository by installing its dependencies:
```sh
cd portfolio

pnpm i
```

The wrapper is a code generator so it must be executed:
```sh
cd components/web-components/wrapper-nextjs

pnpm build:next
```

Now that you're set up, install the actual web components to a NextJS app of your choice:
```sh
npm i @fullstackjosh/web-components
```

Copy the wrapper into your app, eg:
```sh
cp -R /portfolio/components/web-components-wrapper-nextjs/dist /Your/App/web-components-wrapper-nextjs
```

(or use the zip file, also in `dist`)

Finally, and optionally, set up path aliasing:

```json
// tsconfig.json

{
  "compilerOptions": {
    "paths": {
      "@fullstackjosh/web-components-wrapper-nextjs/*": ["./web-components-wrapper-nextjs/*"]
    }
  }
}
```

## Usage

```jsx
// SomeComponent.jsx

"use server";

import { FoldablePanel } from "@fullstackjosh/web-components-wrapper-nextjs/FoldablePanel";

export async function SomeComponent() {
  return (
    <div className="grid gap-2 w-full">
      <h2>The following is a web component rendered on the server</h2>
      <FoldablePanel
        panelTitle="Folding SSR Panel"
        checkboxId="1234"
        panelContent="This was harder than it should have been"
        defaultChecked={true}
      />
    </div>
  );
}
```
