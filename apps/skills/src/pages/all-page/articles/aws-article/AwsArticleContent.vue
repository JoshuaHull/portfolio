<template>
<article class="aws-article-content">
  <section class="icons">
    <fsj-icon-container height="10rem">
      <HeroComputerDesktopSolid />
    </fsj-icon-container>
    <fsj-icon-container height="10rem">
      <AwsLambdaIcon />
    </fsj-icon-container>
    <fsj-icon-container height="10rem">
      <AwsApiGatewayIcon />
    </fsj-icon-container>
    <fsj-icon-container height="10rem">
      <AwsDynamoDbIcon />
    </fsj-icon-container>
  </section>
</article>
</template>

<style scoped>
.aws-article-content {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
}

.icons {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
}

@media (min-width: 768px) {
  .icons {
    column-gap: 8rem;
  }
}
</style>
