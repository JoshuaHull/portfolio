<template>
<Page
  navLeftText="Previous Skill"
  :navLeftRoute="SkillsTestsPageName"
  navRightText="Next Skill"
  :navRightRoute="SkillsGitPageName"
>
  <SkillsRest />
</Page>
</template>

<script setup lang="ts">
import { SkillsTestsPageName, SkillsGitPageName } from "@routers";
</script>
