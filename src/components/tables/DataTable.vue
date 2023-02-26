<template>
<div class="data-table">
  <template v-if="data.length > 0">
    <span
      v-for="(_, key) in data[0]"
      class="column-header"
    >
      {{ key }}
    </span>
    <template v-for="datum in data">
      <span
        v-for="value in datum"
        class="data-cell"
      >
        {{ value }}
      </span>
    </template>
  </template>
</div>
</template>

<script setup lang="ts">
interface DataTableProps {
  data: { [key: string]: string }[];
}

const props = defineProps<DataTableProps>();
const { data } = toRefs(props);

const columnCount = computed(() =>
  data.value.length === 0
    ? 0
    : Object.keys(data.value[0]).length
);
</script>

<style>
.data-table {
  display: grid;
  grid-template-columns: repeat(v-bind(columnCount), auto);
}

.column-header {
  justify-self: flex-end;
  padding: 1rem;
  border: 1px solid white;
  width: 100%;
}

.data-cell {
  justify-self: flex-end;
  padding: 1rem;
  border-left: 1px solid white;
  border-right: 1px solid white;
  width: 100%;
}
</style>
