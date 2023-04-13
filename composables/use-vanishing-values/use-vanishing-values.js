import { ref } from "vue";

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
 * @returns {[Ref<TValue[]>, PushFn]} a Ref of the current values and a function
 * to push new ephemeral values to the end of the queue
 */
export function useVanishingValues(vanishAfterMs) {
  const values = ref([]);

  function popFirstElementSoon() {
    if (values.value.length === 0)
      return;

    setTimeout(() => {
      values.value = [...values.value.slice(1)];
      popFirstElementSoon();
    }, vanishAfterMs);
  }

  const push = (object) => {
    values.value = [...values.value, (object)];

    if (values.value.length > 1)
      return;

    popFirstElementSoon();
  };

  return [values, push];
}
