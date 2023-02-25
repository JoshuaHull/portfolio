<template>
<TabbedDocument>
  <template #title>
    C#
  </template>
  <template #content>
    <CodeBlockForCSharp content =
"public record TwitchUser {
  public string Name => _user.Name;
  public int Points => _user.Points;
  public string TwitchId => _linkedAccount.ExternalId;

  private readonly User _user;
  private readonly LinkedAccount _linkedAccount;

  public Task AddPoints(int points) {
    _user.Points += points;
    return Task.CompletedTask;
  }
}" />
  </template>
</TabbedDocument>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>
