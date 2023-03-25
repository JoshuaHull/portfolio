import { useVanishingValues } from "use-vanishing-values";
import { computed, Ref } from "vue";

type Push<T> = (value: T) => void;
type Current<T> = Ref<T | null>;

export function useVanishingValue<T>(vanishAfterMs: number): [Current<T>, Push<T>] {
  const [values, push] = useVanishingValues(vanishAfterMs);
  const rtn = computed(() => values.value[0] ?? null);

  return [rtn as Current<T>, push];
}
