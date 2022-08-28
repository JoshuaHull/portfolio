import { Ref } from "vue";

export const store: Store = {
  animations: {},
};

type Store = {
  animations: Animations;
}

type Animations = {
  [key: string]: Ref<number | null>;
}
