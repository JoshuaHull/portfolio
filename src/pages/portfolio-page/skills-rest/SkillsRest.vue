<template>
<article class="skills-rest">
  <div class="blobs">
    <AnimatedBlob
      v-for="colour in coloursOnTheScreen"
      :key="colour.hex"
      :colour="colour.hex"
      :left="colour.left"
      :top="colour.top"
      class="skills-rest-animated-blob"
      @click="() => handleBlobClick(colour)"
      @keyup.enter="() => handleBlobClick(colour)"
      @keyup.space="() => handleBlobClick(colour)"
      @keyup.tab="() => handleBlobClick(colour)"
      @keyup.delete="() => handleDelete()"
    />
  </div>
  <section class="rest-endpoints" @click="handleBackgroundClick">
    <button @click="handleCreate">
      POST
    </button>
    <span>/background/blobs</span>
    <button @click="handleDelete">
      DELETE
    </button>
    <span>/background/blobs/{{ selectedColourText }}</span>
    <button @click="handleRecolour">
      POST
    </button>
    <span>/background/blobs/{{ selectedColourText }}/re-colour</span>
  </section>
</article>
</template>

<script setup lang="ts">
type Colour = {
  hex: string;
  left: string;
  top: string;
};

const selectedColour = ref<string | null>(null);
const coloursOnTheScreen = ref<Colour[]>([]);

const selectedColourText = computed(() => selectedColour.value ?? ":selected");

function randomColour() {
  return `#${(Math.random() * 0xFFFFFF << 0).toString(16).toUpperCase()}`;
}

function handleCreate() {
  coloursOnTheScreen.value.push({
    hex: randomColour(),
    left: `${20 + Math.random() * 60}%`,
    top: `${20 + Math.random() * 60}%`,
  });
}

function handleDelete() {
  if (!selectedColour.value)
    return;

  const idx = coloursOnTheScreen.value.findIndex(c => c.hex === selectedColour.value);

  if (idx < 0)
    return;

  coloursOnTheScreen.value.splice(idx, 1);
  selectedColour.value = null;
}

function handleRecolour() {
  if (!selectedColour.value)
    return;

  const idx = coloursOnTheScreen.value.findIndex(c => c.hex === selectedColour.value);

  if (idx < 0)
    return;

  const newColour = randomColour();
  coloursOnTheScreen.value[idx].hex = newColour;
  selectedColour.value = newColour;
}

function handleBlobClick(colour: Colour) {
  selectedColour.value = colour.hex;
}

function handleBackgroundClick() {
  selectedColour.value = null;
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
  grid-template-columns: min-content minmax(10px, 22em);
  grid-template-rows: repeat(3, auto);
  column-gap: 1rem;
  row-gap: 1rem;
  background-color: black;
  padding: 1rem;
  border-radius: 1rem;
  font-family: monospace;
}
</style>
