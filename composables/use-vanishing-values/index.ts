import { ref, Ref } from "vue";

type Push<T> = (value: T) => void;

export function useVanishingValues<T>(vanishAfterMs: number): [Ref<T[]>, Push<T>] {
  const values = ref<T[]>([]);

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

  return [values as Ref<T[]>, push];
}
