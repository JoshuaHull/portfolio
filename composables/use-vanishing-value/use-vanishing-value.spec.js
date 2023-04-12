import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import { useVanishingValue } from "./use-vanishing-value";

describe("use-vanishing-value", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  test("should start with null and immediately switch to the new value", () => {
    // Arrange
    const [currentNumber, pushNewNumber] = useVanishingValue(100);

    // Assert - initial value
    expect(currentNumber.value).toBeNull();

    // Act
    pushNewNumber(2);

    // Assert - immediately switches to new value
    expect(currentNumber.value).toBe(2);
  });

  test("should switch back to null after the elapsed time", () => {
    // Arrange
    const [currentNumber, pushNewNumber] = useVanishingValue(100);
    pushNewNumber(2);

    // Act
    vi.advanceTimersByTime(101);

    // Assert
    expect(currentNumber.value).toBeNull();
  });

  test("should queue up values and cycle through them slowly", () => {
    // Arrange
    const [currentNumber, pushNewNumber] = useVanishingValue(100);

    // Act
    pushNewNumber(1);
    pushNewNumber(2);
    pushNewNumber(3);

    // Assert
    vi.advanceTimersByTime(99);
    expect(currentNumber.value).toBe(1);
    vi.advanceTimersByTime(2);
    expect(currentNumber.value).toBe(2);
    vi.advanceTimersByTime(98);
    expect(currentNumber.value).toBe(2);
    vi.advanceTimersByTime(2);
    expect(currentNumber.value).toBe(3);
    vi.advanceTimersByTime(98);
    expect(currentNumber.value).toBe(3);
    vi.advanceTimersByTime(2);
    expect(currentNumber.value).toBeNull();
  });
});
