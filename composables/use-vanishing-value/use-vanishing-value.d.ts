import { Ref } from "vue";

export type Current<T> = Ref<T | null>;
export type Push<T> = (value: T) => void;

export function useVanishingValue<T>(vanishAfterMs: number): [Current<T>, Push<T>];
