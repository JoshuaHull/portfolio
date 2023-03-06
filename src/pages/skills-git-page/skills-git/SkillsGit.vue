<template>
<article class="skills-git">
  <FileExplorer :fileSystem="fs" />
</article>
</template>

<script setup lang="ts">
import { FileSystem } from "@file-exploring";

const fs = new FileSystem();
</script>

<style>
.skills-git {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
}
</style>
