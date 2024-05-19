<template>
<span class="animated-interaction">
  <span class="animated-interaction-rockets">
    <span class="rocket-1">🚀</span>
  </span>
  interactive
</span>
</template>

<style>
.animated-interaction {
  position: relative;
}

.animated-interaction-rockets {
  position: absolute;
}

[class^="rocket-"] {
  position: absolute;
  opacity: 0;
}

.animated-interaction:hover .rocket-1 {
  animation: rocket1 forwards 0.8s linear;
}

@keyframes rocket1 {
  0% {
    opacity: 0;
    transform: translate(0px, 0px) rotateZ(0deg);
  }

  10% {
    opacity: 100;
    transform: translate(20px, -20px) rotateZ(0deg);
  }

  20% {
    opacity: 100;
    transform: translate(25px, -30px) rotateZ(-40deg);
  }

  30% {
    opacity: 100;
    transform: translate(20px, -35px) rotateZ(-80deg);
  }

  40% {
    opacity: 100;
    transform: translate(15px, -30px) rotateZ(-120deg);
  }

  50% {
    opacity: 100;
    transform: translate(10px, -25px) rotateZ(-160deg);
  }

  60% {
    opacity: 100;
    transform: translate(15px, -20px) rotateZ(-240deg);
  }

  60% {
    opacity: 100;
    transform: translate(10px, -15px) rotateZ(-300deg);
  }

  70% {
    opacity: 100;
    transform: translate(15px, -20px) rotateZ(-360deg);
  }

  80% {
    opacity: 100;
    transform: translate(20px, -25px) rotateZ(-360deg);
  }

  100% {
    opacity: 0;
    transform: translate(50px, -55px) rotateZ(-360deg);
  }
}

</style>
