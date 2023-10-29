import { Ref } from "vue";

export type Current<T> = Ref<T | null>;
export type Push<T> = (value: T) => void;

/**
 * @param vanishAfterMs how long each value should last before vanishing
 * @returns a Ref of the current value and a function
 * to push new ephemeral values to that Ref
 */
export function useVanishingValue<T>(vanishAfterMs: number): [Current<T>, Push<T>];
