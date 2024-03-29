/**
 * @param {[componentName: string, elementName: string][]} components
 */
function* wrapperGenerator(...components) {
  yield readme();
  yield license();

    let customElementsDeclarationContent = `declare namespace JSX {
  interface IntrinsicElements {
`;

  for (let component of components) {
    const [componentName, elementName] = component;

    customElementsDeclarationContent += `    "${elementName}": any,
`;

    yield declarationForServerComponent(componentName);
    yield serverComponentFor(componentName);
    yield declarationForClientComponent(componentName);
    yield clientComponentFor(componentName, elementName);
  }

  customElementsDeclarationContent += `  }
}
`;

  yield ["fsj-web-components.d.ts", customElementsDeclarationContent];
}

/**
 * @returns {[fileName: string, content: string]}
 */
function readme() {
  const fileName = "README.md";

  const content = `# web-components-wrapper-nextjs

A wrapper around [web-components](https://github.com/JoshuaHull/portfolio/tree/main/components/web-components) which allows those components to be rendered on the server of a NextJS app.

## Warning

These files were not developed here. Changes may be erased.

Development for this wrapper lives [here](https://github.com/JoshuaHull/portfolio/tree/main/components/web-components-wrapper-nextjs).
`;

  return [fileName, content];
}

/**
 * @returns {[fileName: string, content: string]}
 */
function license() {
  const fileName = "LICENSE.md";

  const content = `Copyright 2023 Joshua Hull

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;

  return [fileName, content];
}

/**
 * @param {string} componentName
 * @returns {[fileName: string, content: string]}
 */
function declarationForServerComponent(componentName) {
  const fileName = `${componentName}.d.ts`;

  const content = `import React from "react";
import { ${componentName}Props } from "@fullstackjosh/web-components/${componentName}";

export declare function ${componentName}(props: ${componentName}Props): Promise<React.ReactNode>;
`;

  return [fileName, content];
}

/**
 * @param {string} componentName
 * @returns {[fileName: string, content: string]}
 */
function serverComponentFor(componentName) {
  const fileName = `${componentName}.jsx`;

  const content = `"use server";

import { get${componentName}Template } from "@fullstackjosh/web-components/${componentName}Template";
import dynamic from "next/dynamic";
import React from "react";

/**
 * @type {import("./${componentName}").${componentName}}
 */
export async function ${componentName}(props) {
  const ${componentName}ClientOnly = dynamic(async () => {
    const { ${componentName}ClientOnly } = await import("./${componentName}ClientOnly.jsx");
    return { default: ${componentName}ClientOnly };
  }, {
    ssr: false,
    loading: () => {
      const template = get${componentName}Template();
      const html = template(props);
      return (
        <div
          style={{ display: "contents" }}
          dangerouslySetInnerHTML= {{ __html: html }}
        />
      );
    },
  });

  return <${componentName}ClientOnly {...props} />;
}
`;

  return [fileName, content];
}

/**
 * @param {string} componentName
 * @returns {[fileName: string, content: string]}
 */
function declarationForClientComponent(componentName) {
  const fileName = `${componentName}ClientOnly.d.ts`;

  const content = `import React from "react";
import { ${componentName}Props } from "@fullstackjosh/web-components/${componentName}";

export function ${componentName}ClientOnly(props: ${componentName}Props): Promise<React.ReactNode>;
`;

  return [fileName, content];
}

/**
 * @param {string} componentName
 * @param {string} elementName
 * @returns {[fileName: string, content: string]}
 */
function clientComponentFor(componentName, elementName) {
  const fileName = `${componentName}ClientOnly.jsx`;

  const content = `"use client";

import React from "react";
import { register${componentName} } from "@fullstackjosh/web-components/${componentName}";

/**
 * @type {import("./${componentName}ClientOnly").${componentName}ClientOnly}
 */
export const ${componentName}ClientOnly = (props) => {
  register${componentName}();
  return <${elementName} {...props} />;
};
`;

  return [fileName, content];
}

module.exports = {
  wrapperGenerator,
};
