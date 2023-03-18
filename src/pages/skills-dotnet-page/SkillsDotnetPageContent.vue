<template>
<article class="skills-dotnet">
  <div class="skills-dotnet-code">
    <CodeBlockForCSharp
      class="skills-dotnet-variables"
      :content="`
var minDateCreated = new DateTime(2020, 02, 02);
var maxDateUpdated = new DateTime(2021, 05, 05);
  `
    " />
    <QueryBuilder
      class="skills-dotnet-query-builder"
      queryable="_dbContext.Users"
      :queries="queries"
      @updated="handleQueryUpdated"
    />
  </div>
  <DataTable
    class="skills-dotnet-table"
    :data="fitleredData"
    :rowCount="5"
    :columnCount="5"
  />
</article>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
import { QueryFilter } from "@query-building";

const data = [
  {
    "Id": "1",
    "Name": "Jerry J",
    "Points": "10",
    "DateCreated": "2020-02-02",
    "DateUpdated": "2021-03-03",
  },
  {
    "Id": "2",
    "Name": "Sarah S",
    "Points": "30",
    "DateCreated": "2018-07-06",
    "DateUpdated": "2019-04-08",
  },
  {
    "Id": "3",
    "Name": "Alyssa A",
    "Points": "50",
    "DateCreated": "2023-01-04",
    "DateUpdated": "2023-06-07",
  },
  {
    "Id": "4",
    "Name": "Sam S",
    "Points": "70",
    "DateCreated": "2023-01-04",
    "DateUpdated": "2023-06-07",
  },
  {
    "Id": "5",
    "Name": "Manny M",
    "Points": "100",
    "DateCreated": "2021-02-09",
    "DateUpdated": "2021-03-07",
  },
];

const fitleredData = ref(data);

const queries = [
  {
    content: "    .Where(u => u.Points > 10)",
    mobileContent: "  .Where( => u.Points > 10)",
    filter: (user: { [key: string]: string }) => Number.parseInt(user["Points"]) > 10,
  },
  {
    content: "    .Where(u => u.DateCreated > new DateTime(2020, 02, 02))",
    mobileContent: "  .Where( => u.DateCreated > minDateCreated)",
    filter: (user: { [key: string]: string }) => new Date(user["DateCreated"]) > new Date(2020, 2, 2),
  },
  {
    content: "    .Where(u => u.DateUpdated < new DateTime(2021, 05, 05))",
    mobileContent: "  .Where( => u.DateUpdated < maxDateUpdated)",
    filter: (user: { [key: string]: string }) => new Date(user["DateUpdated"]) < new Date(2021, 5, 5),
  },
];

const handleQueryUpdated = (query: QueryFilter[]) => {
  let updated = data;

  for (let q of query)
    updated = updated.filter(q);

  fitleredData.value = updated;
};
</script>

<style>
.skills-dotnet {
  display: grid;
  grid-template-rows: min-content min-content;
  align-content: center;
  row-gap: 4rem;
  height: 100%;
}

@media (min-width: 768px) {
  .skills-dotnet-variables {
    display: none;
  }
}
</style>
