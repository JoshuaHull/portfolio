import { createContext } from "react";
import { registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

const context = createContext(undefined);

export const FsjProvider = ({
  children,
}) => {
  if (!customElements.get("fsj-foldable-panel"))
    registerFoldablePanel();

  return (
    <context.Provider value="">
      {children}
    </context.Provider>
  );
};
