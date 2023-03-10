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
      Application logic coordinates the requirements of a feature.
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
    <template #layer2sidebar>
      A Domain model represents a single idea within a business.<br /><br />
      In code, domain entities contain methods and properties which break
      down business logic into reusable pieces.<br /><br />
      The modelling is data-agnostic and is in this case built up from
      multiple tables.
    </template>
    <template #layer2content>
      <LPContentForDomainLogic />
    </template>
    <template #layer3title>
      Data Access Layer
    </template>
    <template #layer3sidebar>
      It's not always appropriate to match data modelling one-to-one with
      business needs.<br /><br />
      In this case, one user may have multiple linked accounts for different
      social media platforms.<br /><br />
      But at higher layers we want to talk about, eg., Twitch Users and
      Discord Users separately from one another.
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
  width: 100%;
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
