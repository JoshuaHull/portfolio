import { Ref } from "vue";

type Push<T> = (object: T) => void;
type Current<T> = Ref<T | null>;

export function useVanishingObject<T>(vanishAfterMs: number): [Current<T>, Push<T>] {
  const objects = ref<T[]>([]);
  const rtn = computed(() => objects.value[0] ?? null);

  function popFirstElementSoon() {
    if (objects.value.length === 0)
      return;

    setTimeout(() => {
      objects.value = [...objects.value.slice(1)];
      popFirstElementSoon();
    }, vanishAfterMs);
  }

  const push = (object: T) => {
    const identifiedObject = object as T;
    objects.value = [...objects.value, (identifiedObject as any)]; // expecting an internal Vue type

    if (objects.value.length > 1)
      return;

    popFirstElementSoon();
  };

  return [rtn as Current<T>, push];
}
