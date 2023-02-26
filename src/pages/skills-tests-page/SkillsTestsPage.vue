<template>
<Page
  navRightText="Next Skill"
  :navRightRoute="SkillsRestPageName"
>
  <SkillsTests />
</Page>
</template>

<script setup lang="ts">
import { SkillsRestPageName } from "@routers";
</script>
