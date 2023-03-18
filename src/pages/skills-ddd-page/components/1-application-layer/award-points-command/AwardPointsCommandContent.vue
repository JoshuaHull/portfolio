<template>
<ResponsiveCodeBlock
  language="csharp"
  :contents="contents"
/>
</template>

<script setup lang="ts">
import { ResponsiveCodeBlockContent } from "@code-blocks";

const contents: ResponsiveCodeBlockContent[] = [
  {
    size: 'small',
    content:
`public async Task<int> Handle(
  AwardPointsCommand command
) {
  var twitchUser = await _repo.GetById(
    command.TwitchUserId
  );

  await twitchUser.AddPoints(10);
  await _repo.SaveChanges();

  return twitchUser.Points;
}`
  },
  {
    size: 'medium',
    content:
`public async Task<int> Handle(AwardPointsCommand command) {
  var twitchUser = await _repo.GetById(command.TwitchUserId);

  await twitchUser.AddPoints(10);
  await _repo.SaveChanges();

  return twitchUser.Points;
}`
  },
];
</script>
