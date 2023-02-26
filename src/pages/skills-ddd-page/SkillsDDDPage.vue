<template>
<Page
  navLeftText="Previous Skill"
  :navLeftRoute="SkillsRestPageName"
  navRightText="Next Skill"
  :navRightRoute="SkillsDotnetPageName"
>
  <SkillsDDD />
</Page>
</template>

<script setup lang="ts">
import { SkillsDotnetPageName, SkillsRestPageName } from "@routers";
</script>
