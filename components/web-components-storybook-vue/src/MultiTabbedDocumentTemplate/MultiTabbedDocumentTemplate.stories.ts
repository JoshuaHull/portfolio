import { Meta, StoryObj } from "@storybook/vue3";
import MultiTabbedDocumentTemplate from "./MultiTabbedDocumentTemplate.vue";

const meta: Meta<typeof MultiTabbedDocumentTemplate> = {
  title: "Documents/SSR/MultiTabbedDocument",
  component: MultiTabbedDocumentTemplate,
};

export default meta;
type Story = StoryObj<typeof MultiTabbedDocumentTemplate>;

export const OneTab: Story = {
  args: {
    tabCount: 1,
    tabTitles: ["First"],
    initialCurrentTab: 0,
    tabContents: [
      "We need to type enough content here to stretch beyond the width of the tab title.",
    ],
  },
};

export const TwoTabsFirstSelected: Story = {
  args: {
    tabCount: 2,
    tabTitles: ["First", "Second"],
    initialCurrentTab: 0,
    tabContents: [
      "We need to type enough content here to stretch beyond the width of the tab title.",
      "We should type a different amount of content here.",
    ],
  },
};

export const TwoTabsSecondSelected: Story = {
  args: {
    tabCount: 2,
    tabTitles: ["First", "Second"],
    initialCurrentTab: 1,
    tabContents: [
      "We need to type enough content here to stretch beyond the width of the tab title.",
      "We should type a different amount of content here.",
    ],
  },
};

export const ThreeTabsThirdSelected: Story = {
  args: {
    tabCount: 3,
    tabTitles: ["First", "Second", "<b>Third</b>"],
    initialCurrentTab: 2,
    tabContents: [
      "We need to type enough content here to stretch beyond the width of the tab title.",
      "We should type a different amount of content here.",
      `Then finally, we introduce a third tab. We'll also use this tab to make sure HTML <br />
      renders properly in the document content. <em>And it does</em>.`,
    ],
  },
};

export const OneTabEditor: Story = {
  name: "One Tab (Editor)",
  args: {
    tabCount: 1,
    tabTitles: ["MultiTabbedDocument.cs"],
    initialCurrentTab: 0,
    tabContents: [
      `
<pre><code>
 1 | public class MultiTabbedDocument {
   |
 2 |   public string Variant { get; set }
   |
 3 |   public string[] TabTitles { get; set; }
   |
 4 |   public int initialCurrentTab { get; set; }
   |
 5 |   public string[] TabContents { get; set; }   
   |
 6 |   public int TabCount { get; set; }
   |
 7 | }
       </code></pre>
`,
    ],
    variant: "editor",
  },
};

export const TwoTabsSecondSelectedEditor: Story = {
  name: "Two Tabs Second Selected (Editor)",
  args: {
    tabCount: 2,
    tabTitles: ["MultiTabbedDocument.cs", "Page.cs"],
    initialCurrentTab: 1,
    tabContents: [
      "",
      `
<pre><code>
 1 | public class Page {
   |
 2 |   public function Create() {
   |
 3 |     var multiTabbedDocument = new MultiTabbedDocument();   
   |
 4 |     multiTabbedDocument.Variant = "editor";
   |
 5 |     return multiTabbedDocument;
   |
 6 |   }
   |
 7 | }
       </code></pre>
`
    ],
    variant: "editor",
  },
};
