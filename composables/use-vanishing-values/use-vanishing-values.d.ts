import { Ref } from "vue";

export type Push<T> = (value: T) => void;

/**
 * @param vanishAfterMs how long each value should last before vanishing
 * @returns a Ref of the current values and a function
 * to push new ephemeral values to the end of the queue
 */
export function useVanishingValues<T>(vanishAfterMs: number): [Ref<T[]>, Push<T>];
