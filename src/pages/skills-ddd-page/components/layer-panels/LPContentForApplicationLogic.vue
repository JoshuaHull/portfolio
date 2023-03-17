<template>
<TabbedDocument>
  <template #title>
    C#
  </template>
  <template #content>
    <CodeBlockForCSharp content =
'public async Task<int> Handle(AwardPointsCommand command) {
  var twitchUser = await _repo.GetById(command.TwitchUserId);

  await twitchUser.AddPoints(10);
  await _repo.SaveChanges();

  return twitchUser.Points;
}' />
  </template>
</TabbedDocument>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>
