import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import { useVanishingValues } from "./use-vanishing-values";

describe("use-vanishing-values", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  test("should start with an empty array and immediately populate with the new value", () => {
    // Arrange
    const [currentNumbers, pushNewNumber] = useVanishingValues(100);

    // Assert - initial value
    expect(currentNumbers.value).toStrictEqual([]);

    // Act
    pushNewNumber(1);

    // Assert - immediately populates with the new value
    expect(currentNumbers.value).toStrictEqual([1]);
  });

  test("should dequeue the value after the elapsed time", () => {
    // Arrange
    const [ currentNumbers, pushNewNumber] = useVanishingValues(100);
    pushNewNumber(1);

    // Act
    vi.advanceTimersByTime(101);

    // Assert
    expect(currentNumbers.value).toStrictEqual([]);
  });

  test("should queue up values and dequeue them slowly", () => {
    // Arrange
    const [ currentNumbers, pushNewNumber] = useVanishingValues(100);

    // Act
    pushNewNumber(1);
    pushNewNumber(2);
    pushNewNumber(3);

    // Assert
    vi.advanceTimersByTime(99);
    expect(currentNumbers.value).toStrictEqual([1, 2, 3]);
    vi.advanceTimersByTime(2);
    expect(currentNumbers.value).toStrictEqual([2, 3]);
    vi.advanceTimersByTime(98);
    expect(currentNumbers.value).toStrictEqual([2, 3]);
    vi.advanceTimersByTime(2);
    expect(currentNumbers.value).toStrictEqual([3]);
    vi.advanceTimersByTime(98);
    expect(currentNumbers.value).toStrictEqual([3]);
    vi.advanceTimersByTime(2);
    expect(currentNumbers.value).toStrictEqual([]);
  });
});
