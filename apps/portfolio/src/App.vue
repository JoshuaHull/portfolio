<template>
<router-view></router-view>
</template>

<style>
.keyword {
  color: var(--code-block-keyword, blue);
}

.property {
  color: var(--code-block-property, mediumvioletred);
}

.string {
  color: var(--code-block-string, brown);
}

.literal {
  color: var(--code-block-literal, gray);
}

.type {
  color: var(--code-block-type, seagreen);
}

.number {
  color: var(--code-block-type, dodgerblue);
}
</style>
