import { useVanishingValues } from "use-vanishing-values";
import { computed } from "vue";

/**
 * @type {import("./use-vanishing-value").useVanishingValue}
 */
export function useVanishingValue(vanishAfterMs) {
  const [values, push] = useVanishingValues(vanishAfterMs);
  const rtn = computed(() => values.value[0] ?? null);

  return [rtn, push];
}
