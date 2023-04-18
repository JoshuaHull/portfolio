import { heroIconResolver } from "./hero-icon-resolver";
import { test, expect } from "vitest";

test.each([
  {
    component: "HeroSolidEnvelope",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "HeroArrowDownSolid",
    expectedResult: {
      name: "ArrowDownIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "HeroOutlineBuildingStorefront",
    expectedResult: {
      name: "BuildingStorefrontIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "HeroChartPieOutline",
    expectedResult: {
      name: "ChartPieIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "hero-cake-solid",
    expectedResult: {
      name: "CakeIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "hero-chat-bubble-left-solid",
    expectedResult: {
      name: "ChatBubbleLeftIcon",
      from: "@heroicons/vue/24/solid",
    },
  },
  {
    component: "hero-envelope-outline",
    expectedResult: {
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "hero-outline-circle-stack",
    expectedResult: {
      name: "CircleStackIcon",
      from: "@heroicons/vue/24/outline",
    },
  },
  {
    component: "HeroSolidMiniCube",
    expectedResult: {
      name: "CubeIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "HeroMiniSolidCurrencyBangladeshi",
    expectedResult: {
      name: "CurrencyBangladeshiIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "HeroCurrencyDollarSolidMini",
    expectedResult: {
      name: "CurrencyDollarIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "HeroCurrencyEuroMiniSolid",
    expectedResult: {
      name: "CurrencyEuroIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "HeroOutlineMiniCursorArrowRays",
    expectedResult: {
      name: "CursorArrowRaysIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
  {
    component: "HeroMiniOutlineDocumentDuplicate",
    expectedResult: {
      name: "DocumentDuplicateIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
  {
    component: "HeroDocumentMinusMiniOutline",
    expectedResult: {
      name: "DocumentMinusIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
  {
    component: "HeroDocumentPlusOutlineMini",
    expectedResult: {
      name: "DocumentPlusIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
  {
    component: "hero-solid-mini-ellipsis-vertical",
    expectedResult: {
      name: "EllipsisVerticalIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "hero-mini-solid-exclamation-triangle",
    expectedResult: {
      name: "ExclamationTriangleIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "hero-eye-dropper-solid-mini",
    expectedResult: {
      name: "EyeDropperIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "hero-eye-slash-mini-solid",
    expectedResult: {
      name: "EyeSlashIcon",
      from: "@heroicons/vue/20/solid",
    },
  },
  {
    component: "hero-outline-mini-face-frown",
    expectedResult: {
      name: "FaceFrownIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
  {
    component: "hero-mini-outline-finger-print",
    expectedResult: {
      name: "FingerPrintIcon",
      from: "@heroicons/vue/20/outline",
    },
  },
])("($component) should resolve solid, outline, and mini icons in pascal or kebab case", (
  {component, expectedResult}
) => {
  // Act
  const resolved = heroIconResolver(component);

  // Assert
  expect(resolved).toStrictEqual(expectedResult);
});
