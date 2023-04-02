import { Ref } from "vue";

export type Current<T> = Ref<T | null>;

export function useVanishingValue<T>(vanishAfterMs: number): [Current<T>, Push<T>];
