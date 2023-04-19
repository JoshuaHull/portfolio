import { Ref } from "vue";

export type Push<T> = (value: T) => void;

export function useVanishingValues<T>(vanishAfterMs: number): [Ref<T[]>, Push<T>];
