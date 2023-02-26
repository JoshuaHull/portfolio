<template>
<Page
  navLeftText="Previous Skill"
  :navLeftRoute="SkillsDotnetPageName"
>
  <SkillsFrontend />
</Page>
</template>

<script setup lang="ts">
import { SkillsDotnetPageName } from "@routers";
</script>
