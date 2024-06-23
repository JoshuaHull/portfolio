<template>
<article class="commit-graph">
  <div
    v-for="commit in commits"
    class="commit-graph-commit"
    tabindex="0"
    @click="() => handleCommitSelected(commit)"
    @keypress.enter="() => handleCommitSelected(commit)"
    @keypress.space="() => handleCommitSelected(commit)"
  >
    <fsj-icon-container
      class="commit-avatar"
      height="2rem"
      width="6rem"
    >
      <HeroUserCircleSolid class="commit-avatar-icon" />
    </fsj-icon-container>
    <div class="commit-message">
      {{ commit.message }}
    </div>
  </div>
</article>
</template>

<script setup lang="ts">
import { Commit, SourceControl } from "./source-control";

interface CommitGraphProps {
  sourceControl: SourceControl;
}

const props = defineProps<CommitGraphProps>();
const { sourceControl } = toRefs(props);

const emit = defineEmits(["commitSelected"]);

const handleCommitSelected = (commit: Commit) => {
  emit("commitSelected", commit);
};

const commits = computed(() => {
  const rtn: Commit[] = [];

  let current: Commit | null = sourceControl.value.head;

  while (current) {
    rtn.push(current);
    current = current.parent;
  };

  return rtn;
});
</script>

<style>
.commit-graph {
  display: grid;
  row-gap: 0.5rem;
  grid-template-columns: auto;
  width: 100%;
}

.commit-graph-commit {
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  column-gap: 0.5rem;
  border-radius: 1rem;
  padding-right: 0.5rem;
  width: min-content;
  white-space: nowrap;
  cursor: pointer;
}

.commit-graph-commit:hover,
.commit-graph-commit:focus {
  color: var(--color-blue-gray);
  background-color: var(--color-white);
}

.commit-avatar {
  position: relative;
  background-color: indianred;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  justify-self: flex-end;
}

.commit-avatar-icon {
  padding-right: 4rem;
}

.commit-avatar::after {
  position: absolute;
  content: "";
  top: 0px;
  right: 0px;
  height: 2rem;
  border-right: 3px solid red;
}
</style>
