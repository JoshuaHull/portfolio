<template>
<div class="query-builder">
  <CodeBlockForCSharp
    :content="queryable"
    class="queryable"
  />
  <template v-for="(query, n) in queries">
    <ResponsiveCodeBlock
      :class="`query ${enabled.includes(n) ? '' : 'disabled'}`"
      :contents="query.contents"
      language="csharp"
    />
    <IconButton
      class="query-toggle-button"
      width="1.5rem"
      height="1.5rem"
      :aria-label="enabled.includes(n) ? 'exclude expression' : 'include expression'"
      @click="() => onToggle(n)"
    >
      <HeroPlusSolid v-if="!enabled.includes(n)" />
      <HeroMinusSolid v-if="enabled.includes(n)" />
    </IconButton>
  </template>
</div>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp, ResponsiveCodeBlockContent } from "@code-blocks";
import { QueryFilter } from "./QueryFilter";

type Query = {
  contents: ResponsiveCodeBlockContent[];
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
  column-gap: 0.25rem;
  row-gap: 0.5rem;
}

@media (min-width: 640px) {
  .query-builder {
    column-gap: 1rem;
  }
}

.query {
  grid-column-start: 1;
}

.query.disabled {
  cursor: not-allowed;
}

.query.disabled span {
  color: var(--color-text-disabled);
}

.query-toggle-button {
  color: var(--color-action-delete);
  background-color: transparent;
  border: none;
  transition: scale 0.3s ease;
}

.query.disabled + .query-toggle-button {
  color: var(--color-action-create);
}
</style>
