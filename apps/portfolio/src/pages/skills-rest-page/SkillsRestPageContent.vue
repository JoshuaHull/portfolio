<template>
<article class="skills-rest">
  <div class="blobs">
    <AnimatedBlob
      v-for="blob in blobsOnTheScreen"
      :key="blob.id"
      :colour="blob.hex"
      :left="blob.left"
      :top="blob.top"
      :rotation="blob.rotation"
      class="skills-rest-animated-blob"
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
      :response="deleteMessage"
      @action="handleDelete"
    >
      /background/blobs/{{ selectedColourText }}
    </RestEndpoint>
    <RestEndpoint
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

function randomHex() {
  return `#${(Math.random() * 0xFFFFFF << 0).toString(16).toUpperCase()}`;
}

const randomBlob = () => {
  const hex = randomHex();
  const rotation = `${Math.floor(Math.random() * 4) * 90}deg`;

  return {
    id: Math.random(),
    hex,
    left: `${20 + Math.random() * 60}%`,
    top: `${20 + Math.random() * 60}%`,
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

for (let i = 0; i < 20; i += 1) {
  const blob = randomBlob();
  blobsOnTheScreen.value.push(blob);
}
</script>

<style>
.skills-rest {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
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
  font-family: monospace;
  padding-bottom: 0rem;
}
</style>
