<template>
<article class="skills-ddd">
  <MultiLayerPanel
    :layerCount="3"
    :initialCurrentLayer="3"
  >
    <template #layer1title>
      <LPApplicationTitle />
    </template>
    <template #layer1sidebar>
      <LPApplicationSidebar />
    </template>
    <template #layer1content>
      <LPApplicationContent />
    </template>
    <template #layer2title>
      <LPDomainTitle />
    </template>
    <template #layer2sidebar>
      <LPDomainSidebar />
    </template>
    <template #layer2content>
      <LPDomainContent />
    </template>
    <template #layer3title>
      <LPDataAccessTitle />
    </template>
    <template #layer3sidebar>
      <LPDataAccessSidebar />
    </template>
    <template #layer3content>
      <LPDataAccessContent />
    </template>
  </MultiLayerPanel>
</article>
</template>
