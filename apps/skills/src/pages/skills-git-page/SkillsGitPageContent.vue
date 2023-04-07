<template>
<article class="skills-git">
  <FileExplorer :fileSystem="fs" />
  <SkillsGitCenterPanel :sourceControl="sourceControl" />
  <StagingArea :sourceControl="sourceControl" />
</article>
</template>

<script setup lang="ts">
import { FileSystem } from "@file-exploring";
import { SourceControl } from "@source-controlling";
import { Ref } from "vue";

const fs = new FileSystem();
const sc = new SourceControl(fs);
const sourceControl = ref<SourceControl>(sc) as Ref<SourceControl>;

const f1 = fs.addFolder("This is a file explorer.");
fs.addFolder("Add files and folders");
fs.addFolder("with the buttons above.");
fs.addFolder("=================");

f1.addFile("package.json");
sourceControl.value.stageChange("/This is a file explorer./package.json");
sourceControl.value.commit("Initial commit");

fs.addFile("Think of unstaged files as");
fs.addFile("being a work in progress.");

fs.addFile("But staged files are included");
fs.addFile("in your next commit.");
</script>

<style>
.skills-git {
  --skills-git-height: 35rem;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: var(--skills-git-height);
  place-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
  color: var(--color-white);
  width: 64rem;
}
</style>
