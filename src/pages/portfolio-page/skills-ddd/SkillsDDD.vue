<template>
<article class="skills-ddd">
  <MultiLayerPanel
    :layerCount="3"
    :initialCurrentLayer="3"
  >
    <template #layer1title>
      Application Layer
    </template>
    <template #layer1sidebar>
      Application logic coordinates the requirements of the feature.
      In this case, we retrieve a Twitch user, award points to them,
      and save to the DB.<br /><br />
      The actual mutation of the Twitch user, and the underlying data,
      is handled by the Domain Layer.<br /><br />
      The code is easy to read since it targets a single domain.
    </template>
    <template #layer1content>
      <LPContentForApplicationLogic />
    </template>
    <template #layer2title>
      Domain Layer
    </template>
    <template #layer2content>
      <LPContentForDomainLogic />
    </template>
    <template #layer3title>
      Data Access Layer
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

.keyword {
  color: blue;
}

.property {
  color: mediumvioletred;
}

.string {
  color: brown;
}

.literal {
  color: gray;
}
</style>
