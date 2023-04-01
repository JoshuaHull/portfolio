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
    `When I press the "Run" button, then the
    test animation will play to completion.`,
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
    `When I press the "Fail" button, then the
    test animation will fail to complete.`,
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
