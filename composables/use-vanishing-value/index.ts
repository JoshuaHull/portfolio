import { computed, ref, Ref } from "vue";

type Push<T> = (value: T) => void;
type Current<T> = Ref<T | null>;

export function useVanishingValue<T>(vanishAfterMs: number): [Current<T>, Push<T>] {
  const values = ref<T[]>([]);
  const rtn = computed(() => values.value[0] ?? null);

  function popFirstElementSoon() {
    if (values.value.length === 0)
      return;

    setTimeout(() => {
      values.value = [...values.value.slice(1)];
      popFirstElementSoon();
    }, vanishAfterMs);
  }

  const push = (object: T) => {
    const identifiedObject = object as T;
    values.value = [...values.value, (identifiedObject as any)]; // expecting an internal Vue type

    if (values.value.length > 1)
      return;

    popFirstElementSoon();
  };

  return [rtn as Current<T>, push];
}
