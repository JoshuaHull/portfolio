<template>
<CodeBlockForCSharp content =
"public class TwitchUser {
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

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>
