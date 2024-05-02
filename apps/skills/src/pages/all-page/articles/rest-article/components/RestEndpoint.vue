<template>
<div class="rest-endpoint">
  <VButton
    class="rest-method"
    @click="handleButtonClick"
  >
    {{ method }}
  </VButton>
  <span class="rest-url">
    <slot></slot>
  </span>
  <Transition name="response-fade">
    <span
      v-if="response"
      class="rest-message"
    >
      {{ response.content }}
    </span>
  </Transition>
</div>
</template>

<script setup lang="ts">
interface RestEndpointProps {
  method: string;
  allowScroll?: boolean;
  response: {
    colour: string;
    content: string;
  } | null;
}

const props = defineProps<RestEndpointProps>();
const { method, response, allowScroll } = toRefs(props);

const responseColour = computed(() => response.value?.colour);
const overflowX = computed(() => allowScroll.value ? "scroll" : "hidden");

const emit = defineEmits(["action"]);

function handleButtonClick() {
  emit("action");
}
</script>

<style>
.rest-endpoint {
  display: grid;
  grid-template-columns: 5rem auto;
  grid-template-rows: auto 2.25rem;
  grid-template-areas:
    "method     url"
    "     . message"
  ;
  column-gap: 1rem;
  overflow-x: v-bind(overflowX);
}

@media (min-width: 400px) {
  .rest-endpoint {
    overflow-x: hidden;
  }
}

.rest-method {
  grid-area: method;
  text-transform: uppercase;
}

.rest-url {
  grid-area: url;
  white-space: nowrap;
  align-self: center
}

.rest-message {
  grid-area: message;
  font-size: 0.7em;
  color: v-bind(responseColour);
}

.response-fade-enter-active,
.response-fade-leave-active {
  transition: all 0.3s ease;
}

.response-fade-enter-from,
.response-fade-leave-to {
  opacity: 0;
}
</style>
