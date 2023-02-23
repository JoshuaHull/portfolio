<template>
<div class="rest-endpoint">
  <button
    class="rest-method"
    @click="handleButtonClick"
  >
    {{ method }}
  </button>
  <span
    class="rest-url"
  >
    <slot></slot>
  </span>
  <span
    v-if="response"
    class="rest-message"
  >
    {{ response.content }}
  </span>
</div>
</template>

<script setup lang="ts">
interface RestEndpointProps {
  method: string;
  response: {
    colour: string;
    content: string;
  } | null;
}

const props = defineProps<RestEndpointProps>();
const { method, response } = toRefs(props);

const responseColour = computed(() => response.value?.colour);

const emit = defineEmits(["action"]);

function handleButtonClick() {
  emit("action");
}
</script>

<style>
.rest-endpoint {
  display: grid;
  grid-template-columns: minmax(10px, 5rem) minmax(10px, 22em);
  grid-template-rows: auto 2rem;
  grid-template-areas:
    "method     url"
    "     . message"
  ;
  column-gap: 1rem;
}

.rest-method {
  grid-area: method;
  text-transform: uppercase;
}

.rest-url {
  grid-area: url;
}

.rest-message {
  grid-area: message;
  font-size: 0.5em;
}
</style>

<style scoped>
.rest-message {
  color: v-bind(responseColour);
}
</style>
