<template>
<div class="query-builder">
  <CodeBlockForCSharp
    :content="queryable"
    class="queryable"
  />
  <template v-for="(query, n) in queries">
    <CodeBlockForCSharp
      :class="`query ${enabled.includes(n) ? '' : 'disabled'}`"
      :content="query.content"
    />
    <button
      class="query-toggle-button"
      @click="() => onToggle(n)"
    >
      <IconContainer width="1.5rem">
        <PlusSolidIcon v-if="!enabled.includes(n)" />
        <MinusSolidIcon v-if="enabled.includes(n)" />
      </IconContainer>
    </button>
  </template>
</div>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
import { QueryFilter } from "./QueryFilter";

type Query = {
  content: string;
  filter: QueryFilter;
};

interface QueryBuilderProps {
  queryable: string;
  queries: Query[];
}

const props = defineProps<QueryBuilderProps>();
const { queryable, queries } = toRefs(props);

const emit = defineEmits(["updated"]);

const enabled = ref<number[]>([]);

const onToggle = (queryIdx: number) => {
  if (enabled.value.includes(queryIdx))
    enabled.value = enabled.value.filter(d => d !== queryIdx);
  else
    enabled.value.push(queryIdx);

  emitUpdatedQuery();
};

const getUpdatedQuery = () => {
  const q: QueryFilter[] = [];

  for (let i = 0; i < queries.value.length; i += 1)
    if (enabled.value.includes(i))
      q.push(queries.value[i].filter);

  return q;
};

const emitUpdatedQuery = () => {
  const updatedQuery = getUpdatedQuery();
  emit("updated", updatedQuery);
};
</script>

<style>
.query-builder {
  display: grid;
  grid-template-columns: auto min-content;
  column-gap: 1rem;
  row-gap: 0.5rem;
}

.query {
  grid-column-start: 1;
}

.query.disabled {
  cursor: not-allowed;
}

.query.disabled span {
  color: gray;
}

.query-toggle-button {
  color: red;
  background-color: transparent;
  border: none;
  transition: scale 0.3s ease;
}

.query.disabled + .query-toggle-button {
  color: green;
}

.query-toggle-button:hover,
.query-toggle-button:focus {
  transform: scale(125%);
}
</style>
