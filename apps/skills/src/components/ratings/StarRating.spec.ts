import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import StarRating from "./StarRating.vue";

describe("StarRating", () => {
  test.each([
    {
      outOf5: 0,
      expectedSolidStarCount: 0,
      expectedOutlineStarCount: 5,
    },
    {
      outOf5: 1,
      expectedSolidStarCount: 1,
      expectedOutlineStarCount: 4,
    },
    {
      outOf5: 2,
      expectedSolidStarCount: 2,
      expectedOutlineStarCount: 3,
    },
    {
      outOf5: 3,
      expectedSolidStarCount: 3,
      expectedOutlineStarCount: 2,
    },
    {
      outOf5: 4,
      expectedSolidStarCount: 4,
      expectedOutlineStarCount: 1,
    },
    {
      outOf5: 5,
      expectedSolidStarCount: 5,
      expectedOutlineStarCount: 0,
    },
  ])("should display the correct number of solid and outlined stars", (
    { outOf5, expectedSolidStarCount, expectedOutlineStarCount }
  ) => {
    // Act
    const wrapper = mount(StarRating, {
      props: {
        outOf5,
      },
    });

    // Assert
    const actualSolidStarCount = wrapper
      .findAllComponents(`[data-test="solid-star"]`)
      .length;
    const actualOutlineStarCount = wrapper
      .findAllComponents(`[data-test="outline-star"]`)
      .length;

    expect(actualSolidStarCount).toBe(expectedSolidStarCount);
    expect(actualOutlineStarCount).toBe(expectedOutlineStarCount);
  });
});
