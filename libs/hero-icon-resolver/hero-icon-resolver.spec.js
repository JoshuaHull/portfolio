import heroIconResolver from "./index";
import { test, expect } from "vitest";

test.each([
  {
    component: "EnvelopeSolidIcon",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "EnvelopeIconSolid",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "EnvelopeOutlineIcon",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "EnvelopeIconOutline",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "envelope-solid-icon",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "envelope-icon-solid",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "envelope-outline-icon",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "envelope-icon-outline",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
])("should resolve solid or outline icons in pascal or kebab case", (
  {component, expectedResult}
) => {
  // Act
  const resolved = heroIconResolver(component);

  // Assert
  expect(resolved).toStrictEqual(expectedResult);
});
