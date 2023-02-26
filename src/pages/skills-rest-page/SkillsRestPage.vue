<template>
<Page
  navLeftText="Previous Skill"
  :navLeftRoute="SkillsTestsPageName"
  navRightText="Next Skill"
  :navRightRoute="SkillsDDDPageName"
>
  <SkillsRest />
</Page>
</template>

<script setup lang="ts">
import { SkillsTestsPageName, SkillsDDDPageName } from "@routers";
</script>
