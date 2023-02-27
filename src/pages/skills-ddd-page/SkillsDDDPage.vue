<template>
<Page
  navLeftText="Previous Skill"
  :navLeftRoute="SkillsGitPageName"
  navRightText="Next Skill"
  :navRightRoute="SkillsDotnetPageName"
>
  <SkillsDDD />
</Page>
</template>

<script setup lang="ts">
import { SkillsDotnetPageName, SkillsGitPageName } from "@routers";
</script>
