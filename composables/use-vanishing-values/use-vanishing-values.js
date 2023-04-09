import { ref } from "vue";

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
