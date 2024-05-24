<template>
<form class="form-interaction-test" @submit.prevent="onSubmit">
  <FoldableTextArea
    :name="name"
    :dataTestId="dataTestId"
    :checked="checked"
    :panelTitle="panelTitle"
    :disabled="disabled"
    :textAreaPlaceholder="textAreaPlaceholder"
    :textAreaMaxLength="textAreaMaxLength"
    :textAreaValue="textAreaValue"
  />
  <button type="submit">Submit</button>
</form>
</template>

<script setup lang="ts">
import FoldableTextArea from "./FoldableTextArea.vue";

defineProps<{
  name: string;
  dataTestId: string | undefined;
  checked: boolean;
  panelTitle: string;
  disabled: boolean;
  textAreaPlaceholder: string;
  textAreaMaxLength: number;
  textAreaValue: string;
  onSubmit: () => {};
}>();
</script>

<style scoped>
.form-interaction-test {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

button {
  width: fit-content;
}
</style>
