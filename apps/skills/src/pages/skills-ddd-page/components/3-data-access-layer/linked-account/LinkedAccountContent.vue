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
`public class LinkedAccount
{
 public long Id;
 public string Platform;
 public long UserId;
 public string ExternalId;
}`,
  },
  {
    size: "small",
    content:
`public class LinkedAccount {
  public long Id { get; set; }
  public string Platform { get; set; }
  public long UserId { get; set; }
  public string ExternalId { get; set; }
}`,
  },
];
</script>
