<template>
<Page
  navLeftText="Previous Skill"
  :navLeftRoute="SkillsRestPageName"
  navRightText="Next Skill"
  :navRightRoute="SkillsDDDPageName"
>
  <SkillsGit />
</Page>
</template>

<script setup lang="ts">
import { SkillsRestPageName, SkillsDDDPageName } from "@routers";
</script>
