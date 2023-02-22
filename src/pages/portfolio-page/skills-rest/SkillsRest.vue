<template>
<article class="skills-rest">
  <div class="blobs">
    <AnimatedBlob
      v-for="colour in blobsOnTheScreen"
      :key="colour.hex"
      :colour="colour.hex"
      :left="colour.left"
      :top="colour.top"
      :blobId="colour.blobId"
      class="skills-rest-animated-blob"
      @click="() => handleBlobClick(colour)"
      @keyup.enter="() => handleBlobClick(colour)"
      @keyup.space="() => handleBlobClick(colour)"
      @keyup.tab="() => handleBlobClick(colour)"
      @keyup.delete="() => handleDelete()"
    />
  </div>
  <section class="rest-endpoints">
    <div class="rest-endpoint">
      <button
        class="rest-method"
        @click="handleCreate"
      >
        POST
      </button>
      <span
        class="rest-url"
      >
        /background/blobs
      </span>
      <span
        v-if="createMessage"
        class="rest-message"
        :style="`color: ${createMessage.colour}`"
      >
        {{ createMessage.content }}
      </span>
    </div>
    <div class="rest-endpoint">
      <button
        class="rest-method"
        @click="handleDelete"
      >
        DELETE
      </button>
      <span
        class="rest-url"
      >
        /background/blobs/{{ selectedColourText }}
      </span>
      <span
        v-if="deleteMessage"
        class="rest-message"
        :style="`color: ${deleteMessage.colour}`"
      >
        {{ deleteMessage.content }}
      </span>
    </div>
    <div class="rest-endpoint">
      <button
        class="rest-method"
        @click="handleRecolour"
      >
        POST
      </button>
      <span
        class="rest-url"
      >
        /background/blobs/{{ selectedColourText }}/re-colour
      </span>
      <span
        v-if="recolourMessage"
        class="rest-message"
        :style="`color: ${recolourMessage.colour}`"
      >
        {{ recolourMessage.content }}
      </span>
    </div>
  </section>
</article>
</template>

<script setup lang="ts">
import { useVanishingObject } from "@composables";

type Blob = {
  hex: string;
  left: string;
  top: string;
  blobId: number;
};

type Message = {
  colour: string;
  content: string;
};

const selectedBlobHex = ref<string | null>(null);
const blobsOnTheScreen = ref<Blob[]>([]);
const [createMessage, pushCreateMessage] = useVanishingObject<Message>(4000);
const [deleteMessage, pushDeleteMessage] = useVanishingObject<Message>(4000);
const [recolourMessage, pushRecolourMessage] = useVanishingObject<Message>(4000);

const selectedColourText = computed(() => selectedBlobHex.value ?? ":selected");

function randomHex() {
  return `#${(Math.random() * 0xFFFFFF << 0).toString(16).toUpperCase()}`;
}

function handleCreate() {
  const hex = randomHex();

  blobsOnTheScreen.value.push({
    hex,
    left: `${20 + Math.random() * 60}%`,
    top: `${20 + Math.random() * 60}%`,
    blobId: Math.random(),
  });

  pushCreateMessage({
    colour: "green",
    content: `200 OK: created blob with colour "${hex}"`,
  });
}

function handleDelete() {
  if (!selectedBlobHex.value) {
    pushDeleteMessage({
      colour: "red",
      content: "400 Bad Request: route variable \"selected\" is required",
    });
    return;
  }

  const idx = blobsOnTheScreen.value.findIndex(c => c.hex === selectedBlobHex.value);

  if (idx < 0)
    return;

  blobsOnTheScreen.value.splice(idx, 1);
  pushDeleteMessage({
    colour: "green",
    content: `204 No Content: deleted blob with colour "${selectedBlobHex.value}"`,
  });
  selectedBlobHex.value = null;
}

function handleRecolour() {
  if (!selectedBlobHex.value) {
    pushRecolourMessage({
      colour: "red",
      content: "400 Bad Request: route variable \"selected\" is required",
    });
    return;
  }

  const idx = blobsOnTheScreen.value.findIndex(c => c.hex === selectedBlobHex.value);

  if (idx < 0)
    return;

  const newColour = randomHex();
  blobsOnTheScreen.value[idx].hex = newColour;
  pushRecolourMessage({
    colour: "green",
    content: `200 OK: updated blob colour from "${selectedBlobHex.value}" to "${newColour}"`,
  });
  selectedBlobHex.value = newColour;
}

function handleBlobClick(blob: Blob) {
  selectedBlobHex.value = blob.hex;
}
</script>

<style>
.skills-rest {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
  position: relative;
}

.blobs {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.skills-rest-animated-blob {
  width: 5rem;
  position: absolute;
}

.rest-endpoints {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-rows: repeat(3, auto);
  background-color: black;
  padding: 2rem 2rem 0rem 2rem;
  border-radius: 1rem;
  font-family: monospace;
}

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
}

.rest-url {
  grid-area: url;
}

.rest-message {
  grid-area: message;
  font-size: 0.5em;
  color: red;
}
</style>
