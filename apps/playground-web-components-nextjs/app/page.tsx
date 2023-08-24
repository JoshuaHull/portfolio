// @ts-ignore
import { FoldablePanel } from "@fullstackjosh/web-components-wrapper-nextjs/FoldablePanel";

export default function Home() {
  return (
    <main className="p-24">
      <FoldablePanel
        checkboxId="1234"
        defaultChecked={true}
        panelTitle="Web Components in NextJS"
        panelContent="
          This web component is rendered server side.
          There is a plugin to do this using Lit components, but it only works for NextJS's
          pages router, which is soon-to-be-deprecated. So I've done
          this in a hand-rolled way."
      />
    </main>
  )
}
