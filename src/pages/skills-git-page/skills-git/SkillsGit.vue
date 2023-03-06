<template>
<article class="skills-git">
  <StagingArea :sourceControl="sc" />
  <FileExplorer :fileSystem="fs" />
</article>
</template>

<script setup lang="ts">
import { FileSystem } from "@file-exploring";
import { SourceControl } from "@source-controlling";

const fs = new FileSystem();
const sc = new SourceControl(fs);
</script>

<style>
.skills-git {
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  align-items: center;
  height: 100%;
}
</style>
