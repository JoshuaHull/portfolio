import { Ref } from "vue";
import { store } from "../store";

export function useAnimation(id: string): [Ref<number | null>, (duration?: number) => void] {
  const animations = store.animations;

  if (!animations[id])
    animations[id] = ref(null);

  const trigger = (duration: number = 300) => {
    animations[id].value = null;
    setTimeout(() => animations[id].value = duration);
  }

  return [ animations[id], trigger ];
}
