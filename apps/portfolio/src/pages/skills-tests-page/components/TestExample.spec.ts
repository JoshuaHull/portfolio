import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import TestExample from "./TestExample.vue";

describe(
  `TestExample.vue > "Run" button tests`,
() => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  test(
    `Given the "pass" variant, when the user
    clicks "Run", all 10 parts of the loading
    bar should be displayed`,
  async () => {
    // Arrange
    const wrapper = mount(TestExample, {
      props: {
        variant: "pass",
      },
    });

    const runButton = wrapper.get(".run-button");

    // Act
    runButton.trigger("click");
    vi.advanceTimersByTime(3500);
    await flushPromises();

    // Assert
    const allLoadingParts = wrapper.findAll(".loading-part");
    expect(allLoadingParts.length).toBe(10);
  });

  test(
    `Given the "fail" variant, when the user
    clicks "Run", only 7 parts of the loading
    bar should be displayed`,
  async () => {
    // Arrange
    const wrapper = mount(TestExample, {
      props: {
        variant: "fail",
      },
    });

    const runButton = wrapper.get(".run-button");

    // Act
    runButton.trigger("click");
    vi.advanceTimersByTime(3500);
    await flushPromises();

    // Assert
    const allLoadingParts = wrapper.findAll(".loading-part");
    expect(allLoadingParts.length).toBe(7);
  });
});
