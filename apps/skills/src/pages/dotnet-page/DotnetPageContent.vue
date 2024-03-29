<template>
<article class="dotnet-page-content">
  <section class="dotnet-page-content-code">
    <ResponsiveCodeBlock
      class="dotnet-page-content-variables"
      :contents="variablesContents"
      language="csharp"
    />
    <QueryBuilder
      class="dotnet-page-content-query-builder"
      queryable="_dbContext.Users"
      :queries="queries"
      @updated="handleQueryUpdated"
    />
  </section>
  <DataTable
    class="dotnet-page-table"
    :data="responsiveData"
    :rowCount="5"
    :columnCount="5"
  />
</article>
</template>

<script setup lang="ts">
import { ResponsiveCodeBlockContent } from "@code-blocks";
import { QueryFilter } from "@query-building";
import { useMediaQuery } from "@vueuse/core";

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
const isSmallScreen = useMediaQuery("(min-width: 640px)");

const responsiveData = computed(() => {
  if (isSmallScreen.value)
    return fitleredData.value;

  const smallerData = [];

  for (let datum of fitleredData.value) {
    const smallerDatum = {
      ...datum,
    };

    // @ts-ignore
    delete smallerDatum["Id"];
    // @ts-ignore
    delete smallerDatum["Name"];

    smallerData.push(smallerDatum);
  }

  return smallerData;
});

const variablesContents: ResponsiveCodeBlockContent[] = [
  {
    content:
`var minDateCreated =
  new DateTime(2020, 02, 02);

var maxDateUpdated =
  new DateTime(2021, 05, 05);`,
    size: "tiny",
  },
  {
    content:
`var minDateCreated = new DateTime(2020, 02, 02);

var maxDateUpdated = new DateTime(2021, 05, 05);`,
    size: "small",
  },
];

const queries: { contents: ResponsiveCodeBlockContent[], filter: QueryFilter }[] = [
  {
    contents: [
      {
        content: "    .Where(u => u.Points > 10)",
        size: "medium",
      },
      {
        content: "  .Where(u => u.Points > 10)",
        size: "small",
      },
      {
        content: "  .Where(u => u.Points > 10)",
        size: "tiny",
      },
    ],
    filter: (user: { [key: string]: string }) => Number.parseInt(user["Points"]) > 10,
  },
  {
    contents: [
      {
        content: "    .Where(u => u.DateCreated > new DateTime(2020, 02, 02))",
        size: "medium",
      },
      {
        content: "  .Where(u => u.DateCreated > minDateCreated)",
        size: "small",
      },
      {
        content:
`  .Where(u => u.DateCreated
    > minDateCreated)`,
        size: "tiny",
      },
    ],
    filter: (user: { [key: string]: string }) => new Date(user["DateCreated"]) > new Date(2020, 2, 2),
  },
  {
    contents: [
      {
        content: "    .Where(u => u.DateUpdated < new DateTime(2021, 05, 05))",
        size: "medium",
      },
      {
        content: "  .Where(u => u.DateUpdated < maxDateUpdated)",
        size: "small",
      },
      {
        content:
`  .Where(u => u.DateUpdated
    < maxDateUpdated)`,
        size: "tiny",
      },
    ],
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
.dotnet-page-content {
  display: grid;
  grid-template-rows: repeat(2, min-content);
  align-content: center;
  row-gap: 4rem;
  height: 100%;
}

.dotnet-page-content-code {
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 1rem;
}

@media (min-width: 768px) {
  .dotnet-page-content-variables {
    display: none;
  }
}
</style>
