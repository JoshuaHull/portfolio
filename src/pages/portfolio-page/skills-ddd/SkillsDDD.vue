<template>
<article class="skills-ddd">
  <MultiLayerPanel
    :layerCount="3"
    :initialCurrentLayer="3"
  >
    <template #layer1title>
      Application Logic
    </template>
    <template #layer1content>
      <LPContentForApplicationLogic />
    </template>
    <template #layer2title>
      Domain Logic
    </template>
    <template #layer2content>
      <LPContentForDomainLogic />
    </template>
    <template #layer3title>
      Data Access
    </template>
    <template #layer3content>
      <LPContentForDataAccess />
    </template>
  </MultiLayerPanel>
</article>
</template>

<style>
.skills-ddd {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
}
</style>
