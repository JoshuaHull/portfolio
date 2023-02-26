<template>
<article class="skills-dotnet">
  <DataTable :data="fitleredData" />
  <QueryBuilder
    queryable="_dbContext.Users"
    :queries="queries"
    @updated="handleQueryUpdated"
  />
</article>
</template>

<script setup lang="ts">
import { QueryFilter } from "@query-building";

const data = [
  {
    "Id": "1",
    "Name": "Jerry J",
    "Points": "10",
    "DateCreated": "2022-02-02",
    "DateUpdated": "2022-03-03",
  },
  {
    "Id": "2",
    "Name": "Sarah S",
    "Points": "30",
    "DateCreated": "2018-07-06",
    "DateUpdated": "2019-04-08",
  },
];

const fitleredData = ref(data);

const queries = [
  {
    content: "    .Where(u => u.Points > 10)",
    filter: (user: { [key: string]: string }) => Number.parseInt(user["Points"]) > 10,
  },
  {
    content: "    .Where(u => u.DateCreated > new DateTime(2020, 02, 02))",
    filter: (user: { [key: string]: string }) => true,
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
  place-items: center;
  align-items: center;
  height: 100%;
}
</style>
