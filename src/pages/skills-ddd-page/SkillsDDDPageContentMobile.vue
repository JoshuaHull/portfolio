<template>
<article class="skills-ddd">
  <MultiLayerPanel
    :layerCount="3"
    :initialCurrentLayer="3"
  >
    <template #layer1title>
      <LPApplicationTitle />
    </template>
    <template #layer1content>
      <LPApplicationContentMobile />
    </template>
    <template #layer2title>
      <LPDomainTitle />
    </template>
    <template #layer2content>
      <LPDomainContentMobile />
    </template>
    <template #layer3title>
      <LPDataAccessTitle />
    </template>
    <template #layer3content>
      <LPDataAccessContentMobile />
    </template>
  </MultiLayerPanel>
</article>
</template>
