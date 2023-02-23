<template>
<LayerPanel
    layerTitle="Domain Logic"
>
  <template #controls>
    <button @click="handleUp">up</button>
    <button @click="handleDown">down</button>
  </template>
  <template #content>
    looks like this
  </template>
</LayerPanel>
</template>

<script setup lang="ts">
const emit = defineEmits(["up", "down"]);

function handleUp() {
  emit("up");
}

function handleDown() {
  emit("down");
}
</script>
