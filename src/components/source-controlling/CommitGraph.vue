<template>
<article class="commit-graph">
  <template
    v-for="commit in commits"
  >
    <IconContainer
      class="commit-avatar"
      height="2rem"
      width="6rem"
    >
      <UserCircleSolidIcon />
    </IconContainer>
    <div class="commit-message">
      {{ commit.message }}
    </div>
  </template>
</article>
</template>

<script setup lang="ts">
import { SourceControl } from "./source-control";

interface CommitGraphProps {
  sourceControl: SourceControl;
}

const props = defineProps<CommitGraphProps>();
const { sourceControl } = toRefs(props);

type DisplayedCommit = {
  message: string;
};

const commits = computed(() => {
  const rtn: DisplayedCommit[] = [];
  
  let current = sourceControl.value.head;

  if (!current)
    return rtn;

  do {
    rtn.push({
      message: current.message,
    });
    current = current.parent;
  } while (current != null);

  return rtn;
});

</script>

<style>
.commit-graph {
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
}

.commit-avatar {
  position: relative;
  background-color: indianred;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  padding-right: 4rem;
  justify-self: flex-end;
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
