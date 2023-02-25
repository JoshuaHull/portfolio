<template>
<MultiTabbedDocument
  :tabCount="1"
  :initialCurrentTab="1"
>
  <template #tab1title>
    C#
  </template>
  <template #tab1content>
    <CodeBlockForCSharp content =
'public async Task<int> Handle(AwardPointsCommand command) {
  var twitchUser = await _repo.GetById(command.TwitchUserId);

  await twitchUser.AddPoints(10);
  await _repo.SaveChanges();

  return twitchUser.Points;
}' />
  </template>
</MultiTabbedDocument>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>
