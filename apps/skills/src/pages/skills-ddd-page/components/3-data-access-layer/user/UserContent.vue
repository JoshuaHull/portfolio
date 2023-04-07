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
`public class User {
 public long Id;
 public string Name;      
 public int Points;
}`,
  },
  {
    size: "small",
    content:
`public class User {
  public long Id { get; set; }
  public string Name { get; set; }
  public int Points { get; set; }
}`,
  },
];
</script>
