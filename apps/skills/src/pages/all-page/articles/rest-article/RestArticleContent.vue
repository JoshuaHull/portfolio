<template>
<article class="rest-article-content">
  <div class="blobs">
    <AnimatedBlob
      v-for="blob in blobsOnTheScreen"
      :key="blob.id"
      :colour="blob.hex"
      :left="blob.left"
      :top="blob.top"
      :rotation="blob.rotation"
      class="rest-article-content-animated-blob"
      @click="() => handleBlobClick(blob)"
      @keyup.enter="() => handleBlobClick(blob)"
      @keyup.space="() => handleBlobClick(blob)"
      @keyup.tab="() => handleBlobClick(blob)"
      @keyup.delete="() => handleDelete()"
    />
  </div>
  <VCard class="rest-endpoints">
    <RestEndpoint
      method="post"
      :response="createMessage"
      @action="handleCreate"
    >
      /background/blobs
    </RestEndpoint>
    <RestEndpoint
      method="delete"
      :allowScroll="true"
      :response="deleteMessage"
      @action="handleDelete"
    >
      /background/blobs/{{ selectedColourText }}
    </RestEndpoint>
    <RestEndpoint
      v-if="!isShortScreen && !isNarrowScreen"
      method="post"
      :response="recolourMessage"
      @action="handleRecolour"
    >
      /background/blobs/{{ selectedColourText }}/re-colour
    </RestEndpoint>
  </VCard>
</article>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { useVanishingValue } from "use-vanishing-value";

type Blob = {
  id: number;
  hex: string;
  left: string;
  top: string;
  rotation: string;
};

type Message = {
  colour: string;
  content: string;
};

const selectedBlobHex = ref<string | null>(null);
const blobsOnTheScreen = ref<Blob[]>([]);
const [createMessage, pushCreateMessage] = useVanishingValue<Message>(4000);
const [deleteMessage, pushDeleteMessage] = useVanishingValue<Message>(4000);
const [recolourMessage, pushRecolourMessage] = useVanishingValue<Message>(4000);

const selectedColourText = computed(() => selectedBlobHex.value ?? ":selected");

const isShortScreen = useMediaQuery("(max-height: 640px)");
const isNarrowScreen = useMediaQuery("(max-width: 640px)");
const isVeryNarrowScreen = useMediaQuery("(max-width: 340px)");

function randomHex() {
  return `#${(Math.random() * 0xFFFFFF << 0).toString(16).toUpperCase()}`;
}

const randomBlob = () => {
  const hex = randomHex();
  const rotation = `${Math.floor(Math.random() * 4) * 90}deg`;

  const left = isVeryNarrowScreen.value ? (Math.random() * 70) : (Math.random() * 70 + 10);
  const top = isVeryNarrowScreen.value ? (Math.random() * 90) : (Math.random() * 90);

  return {
    id: Math.random(),
    hex,
    left: `${left}%`,
    top: `${top}%`,
    rotation,
  };
};

function handleCreate() {
  const blob = randomBlob();

  blobsOnTheScreen.value.push(blob);

  pushCreateMessage({
    colour: "var(--color-action-create)",
    content: `200 OK: created blob with colour "${blob.hex}"`,
  });
}

function handleDelete() {
  if (!selectedBlobHex.value) {
    pushDeleteMessage({
      colour: "var(--color-action-delete)",
      content: "400 Bad Request: route variable \"selected\" is required",
    });
    return;
  }

  const idx = blobsOnTheScreen.value.findIndex(c => c.hex === selectedBlobHex.value);

  if (idx < 0)
    return;

  blobsOnTheScreen.value.splice(idx, 1);
  pushDeleteMessage({
    colour: "var(--color-action-create)",
    content: `204 No Content: deleted blob with colour "${selectedBlobHex.value}"`,
  });
  selectedBlobHex.value = null;
}

function handleRecolour() {
  if (!selectedBlobHex.value) {
    pushRecolourMessage({
      colour: "var(--color-action-delete)",
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
    colour: "var(--color-action-create)",
    content: `200 OK: updated blob colour from "${selectedBlobHex.value}" to "${newColour}"`,
  });
  selectedBlobHex.value = newColour;
}

function handleBlobClick(blob: Blob) {
  selectedBlobHex.value = blob.hex;
}

const max = isVeryNarrowScreen.value ? 10 : 20;

for (let i = 0; i < max; i += 1) {
  const blob = randomBlob();
  blobsOnTheScreen.value.push(blob);
}
</script>

<style>
.rest-article-content {
  display: grid;
  place-items: center;
  align-items: center;
  width: 100%;
  max-width: 540px;
}

.blobs {
  position: absolute;
  top: var(--top-navbar-height);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.rest-article-content-animated-blob {
  width: 5rem;
  position: absolute;
}

.rest-endpoints {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-rows: repeat(3, auto);
  font-family: monospace;
  padding: 2rem 2rem 0rem 2rem;
  width: 100%;
}

@media (max-width: 640px), (max-height: 640px) {
  .rest-endpoints {
    padding: 2rem 1rem 0rem 1rem;
  }
}
</style>
