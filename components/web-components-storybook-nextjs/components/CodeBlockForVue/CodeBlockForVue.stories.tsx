import { Meta } from "@storybook/react";
import { CodeBlockForVueClientOnly } from "../../web-components-wrapper-nextjs/CodeBlockForVueClientOnly";
import { CodeBlockForVueProps } from "@fullstackjosh/web-components/CodeBlockForVue";

const meta: Meta<typeof CodeBlockForVueClientOnly> = {
  component: CodeBlockForVueClientOnly,
};

// dirty hack but something is going on with storybook here.
// looks like registering components inside the storybook iframe causes a lot of pain.
// Lit components may have a related issue https://github.com/storybookjs/storybook/issues/12578
const fixCodeBlockForVue = (props?: Partial<CodeBlockForVueProps>) => {
  setTimeout(() => {
    const codeBlock: any = document.querySelector("fsj-code-block-for-vue");
    codeBlock.content = props?.content ?? `export function greetWorld() { console.log("Hello, world!"); }`;
    codeBlock.hideLineNumbers = props?.hideLineNumbers ?? false;
  });
};

export default meta;

export const Primary = () => {
  fixCodeBlockForVue({
    content: `<template>
<div class="story">
  Primary Story
</div>
</template>

<script setup>
const visits = ref(0);
</script>

<style>
@media (min-width: 768px) {
  .story {
    width: 30%;
  }
}
</style>
`
  });
  // @ts-ignore
  return <CodeBlockForVueClientOnly />;
};

export const HideLineNumbers = () => {
  fixCodeBlockForVue({
    hideLineNumbers: true,
    content: `<template>
<div class="story">
  Hide Line Numbers Story
</div>
</template>

<script setup>
const visits = ref(0);
</script>

<style>
@media (min-width: 768px) {
  .story {
    width: 30%;
  }
}
</style>`
  });
  // @ts-ignore
  return <CodeBlockForVueClientOnly />;
};
