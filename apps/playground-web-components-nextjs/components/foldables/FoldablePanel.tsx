"use server";

import { getFoldablePanelHtmlTemplate } from "@fullstackjosh/web-components/FoldablePanel";
import dynamic from "next/dynamic"

const FoldablePanelClient = dynamic(async () => {
  const { FoldablePanelClient } = await import("./FoldablePanelClient");
  return { default: FoldablePanelClient };
}, {
  ssr: false,
  loading: () => {
    const template = getFoldablePanelHtmlTemplate();
    const html = template({
      checkboxId: "1234",
      panelTitle: "SSR Panel Title",
      panelContent: "This web component is rendered server side. And soon you'll see the client side hydration.",
    });
    return  <div style={{ display: "contents" }} dangerouslySetInnerHTML={{__html: html}} />;
  },
});

export async function FoldablePanel() {
  return (
    <FoldablePanelClient
      checkboxId="1234"
      panelTitle="Web Components in NextJS"
      panelContent="
        This web component is rendered server side.
        There is a plugin to do this using Lit components, but it only works for NextJS's
        pages directory, which is soon-to-be-deprecated. So I've done
        this in a hand-rolled way."
    />
  );
}
