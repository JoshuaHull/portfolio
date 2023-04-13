import { useVanishingValues } from "use-vanishing-values";
import { computed } from "vue";

/**
 * @template [TValue = Object]
 * @callback PushFn
 * @param {TValue} nextValue
 * @returns {void}
 */

 /**
  * @template [TValue = Object]
  * @typedef Ref<TValue>
  * @property {TValue} value
  */

/**
 * @template [TValue = Object]
 * @param {number} vanishAfterMs - how long each value should last before vanishing
 * @returns {[Ref<TValue>, PushFn]} a Ref of the current value and a function
 * to push new ephemeral values to that Ref
 */
export function useVanishingValue(vanishAfterMs) {
  const [values, push] = useVanishingValues(vanishAfterMs);
  const rtn = computed(() => values.value[0] ?? null);

  return [rtn, push];
}
