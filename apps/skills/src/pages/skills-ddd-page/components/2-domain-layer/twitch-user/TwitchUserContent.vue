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
    size: "tiny",
    content:
`public class TwitchUser {
  public string Name
    => _user.Name;
  public int Points
    => _user.Points;
  public string TwitchId
    => _a.ExternalId;

  public User _user;
  public LinkedAccount _a;

  public Task AddPoints(
    int points
  ) {
    _user.Points += points;

    return Task
      .CompletedTask;
  }
}`
  },
  {
    size: "small",
    content:
`public class TwitchUser {
  public string Name => _user.Name;
  public int Points => _user.Points;
  public string TwitchId => _acc.ExternalId;

  private readonly User _user;
  private readonly LinkedAccount _acc;

  public Task AddPoints(int points) {
    _user.Points += points;
    return Task.CompletedTask;
  }
}`
  },
  {
    size: "medium",
    content:
`public class TwitchUser {
  public string Name => _user.Name;
  public int Points => _user.Points;
  public string TwitchId => _linkedAccount.ExternalId;

  private readonly User _user;
  private readonly LinkedAccount _linkedAccount;

  public Task AddPoints(int points) {
    _user.Points += points;
    return Task.CompletedTask;
  }
}`
  },
];
</script>
