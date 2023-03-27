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
    component: "ArrowDownIconSolid",
    expectedResult: {
      name: "ArrowDownIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "BuildingStorefrontOutlineIcon",
    expectedResult: {
      name: "BuildingStorefrontIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "ChartPieIconOutline",
    expectedResult: {
      name: "ChartPieIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "cake-solid-icon",
    expectedResult: {
      name: "CakeIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "chat-bubble-left-icon-solid",
    expectedResult: {
      name: "ChatBubbleLeftIcon",
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
    component: "circle-stack-icon-outline",
    expectedResult: {
      name: "CircleStackIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "CubeSolidMiniIcon",
    expectedResult: {
      name: "CubeIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "CurrencyBangladeshiIconMiniSolid",
    expectedResult: {
      name: "CurrencyBangladeshiIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "CursorArrowRaysOutlineMiniIcon",
    expectedResult: {
      name: "CursorArrowRaysIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
  {
    component: "DocumentDuplicateIconMiniOutline",
    expectedResult: {
      name: "DocumentDuplicateIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
  {
    component: "ellipsis-vertical-solid-mini-icon",
    expectedResult: {
      name: "EllipsisVerticalIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "exclamation-triangle-icon-mini-solid",
    expectedResult: {
      name: "ExclamationTriangleIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "eye-slash-outline-mini-icon",
    expectedResult: {
      name: "EyeSlashIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
  {
    component: "finger-print-icon-mini-outline",
    expectedResult: {
      name: "FingerPrintIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
])("($component) should resolve solid or outline icons in pascal or kebab case", (
  {component, expectedResult}
) => {
  // Act
  const resolved = heroIconResolver(component);

  // Assert
  expect(resolved).toStrictEqual(expectedResult);
});
