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
    successful loading bar animation will play`,
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
    const successLoadingBar = wrapper.find(
      "[data-testid='loading-bar-success']"
    );
    expect(successLoadingBar.exists()).toBe(true);

    const failedLoadingBar = wrapper.find(
      "[data-testid='loading-bar-fail']"
    );
    expect(failedLoadingBar.exists()).toBe(false);
  });

  test(
    `When I press the "Fail" button, then the
    failing loading bar animation will play`,
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
    const failedLoadingBar = wrapper.find(
      "[data-testid='loading-bar-fail']"
    );
    expect(failedLoadingBar.exists()).toBe(true);

    const successLoadingBar = wrapper.find(
      "[data-testid='loading-bar-success']"
    );
    expect(successLoadingBar.exists()).toBe(false);
  });
});
