<template>
<article class="aws-page-content">
  <section class="icons">
    <IconContainer height="10rem">
      <HeroComputerDesktopSolid />
    </IconContainer>
    <IconContainer height="10rem">
      <AwsLambdaIcon />
    </IconContainer>
    <IconContainer height="10rem">
      <AwsApiGatewayIcon />
    </IconContainer>
    <IconContainer height="10rem">
      <AwsDynamoDbIcon />
    </IconContainer>
  </section>
</article>
</template>

<style scoped>
.aws-page-content {
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
