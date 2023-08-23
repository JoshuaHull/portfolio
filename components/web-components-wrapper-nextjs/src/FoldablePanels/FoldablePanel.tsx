"use server";

import { FoldablePanelProps, getFoldablePanelHtmlTemplate } from "@fullstackjosh/web-components/FoldablePanel";
import dynamic from "next/dynamic";

export async function FoldablePanel(props: FoldablePanelProps) {
  const FoldablePanelClientOnly = dynamic(async () => {
    const { FoldablePanelClientOnly } = await import("./FoldablePanelClientOnly");
    return { default: FoldablePanelClientOnly };
  }, {
    ssr: false,
    loading: () => {
      const template = getFoldablePanelHtmlTemplate();
      const html = template(props);
      return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{__html: html}} />;
    },
  });

  return <FoldablePanelClientOnly {...props}/>;
}
