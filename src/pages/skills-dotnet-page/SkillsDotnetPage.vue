<template>
<Page
  navLeftText="Previous Skill"
  :navLeftRoute="SkillsDDDPageName"
  navRightText="Next Skill"
  :navRightRoute="SkillsFrontendPageName"
>
  <SkillsDotnet />
</Page>
</template>

<script setup lang="ts">
import { SkillsDDDPageName, SkillsFrontendPageName } from "@routers";
</script>
