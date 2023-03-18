<template>
<div class="data-table">
  <template v-if="data.length === 0">
    <em>no results</em>
  </template>
  <template v-else>
    <span
      v-for="(_, key) in data[0]"
      class="column-header"
    >
      {{ key }}
    </span>
    <template v-for="(datum, n) in data">
      <span
        v-for="value in datum"
        :class="`data-cell ${n === data.length - 1 ? 'data-cell-last-row' : ''}`"
      >
        {{ value }}
      </span>
    </template>
    <template v-for="_ in emptyRows">
      <span
        v-for="c in columnCount"
        class="empty-data-cell"
      >
      </span>
    </template>
  </template>
</div>
</template>

<script setup lang="ts">
interface DataTableProps {
  data: { [key: string]: string }[];
  columnCount: number;
  rowCount: number;
}

const props = defineProps<DataTableProps>();
const { data, rowCount } = toRefs(props);

const emptyRows = computed(() => rowCount.value - data.value.length);

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
  --data-table-cell-padding: 0.5rem;
}

.column-header {
  text-align: end;
  padding: var(--data-table-cell-padding);
  border: 1px solid white;
}

.data-cell {
  text-align: end;
  padding: var(--data-table-cell-padding);
  border-left: 1px solid white;
  border-right: 1px solid white;
}

.data-cell-last-row {
  border-bottom: 1px solid white;
}

.empty-data-cell {
  height: calc(24px + 2 * var(--data-table-cell-padding));
}

@media (min-width: 768px) {
  .data-table {
    --data-table-cell-padding: 1rem;
  }
}
</style>
