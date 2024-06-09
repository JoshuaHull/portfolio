import { Meta, StoryObj } from "@storybook/vue3";
import MultiTabbedDocument from "./MultiTabbedDocument.vue";

const meta: Meta<typeof MultiTabbedDocument> = {
  title: "Documents/Hydrated/MultiTabbedDocument",
  component: MultiTabbedDocument,
};

export default meta;
type Story = StoryObj<typeof MultiTabbedDocument>;

export const OneTab: Story = {
  args: {
    tabCount: 1,
    initialCurrentTab: 0,
  },
  render: (args) => ({
    components: { MultiTabbedDocument },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MultiTabbedDocument v-bind="args">
        <span slot="tab0title">
          First
        </span>
        <div slot="tab0content">
          We need to type enough content here to stretch beyond the width of the tab title.
        </div>
      </MultiTabbedDocument>
    `,
  }),
};

export const TwoTabsFirstSelected: Story = {
  args: {
    tabCount: 2,
    initialCurrentTab: 0,
  },
  render: (args) => ({
    components: { MultiTabbedDocument },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MultiTabbedDocument v-bind="args">
        <span slot="tab0title">
          First
        </span>
        <div slot="tab0content">
          We need to type enough content here to stretch beyond the width of the tab title.
        </div>
        <span slot="tab1title">
          Second
        </span>
        <div slot="tab1content">
          We should type a different amount of content here.
        </div>
      </MultiTabbedDocument>
    `,
  }),
};

export const TwoTabsSecondSelected: Story = {
  args: {
    tabCount: 2,
    initialCurrentTab: 1,
  },
  render: (args) => ({
    components: { MultiTabbedDocument },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MultiTabbedDocument v-bind="args">
        <span slot="tab0title">
          First
        </span>
        <div slot="tab0content">
          We need to type enough content here to stretch beyond the width of the tab title.
        </div>
        <span slot="tab1title">
          Second
        </span>
        <div slot="tab1content">
          We should type a different amount of content here.
        </div>
      </MultiTabbedDocument>
    `,
  }),
};

export const ThreeTabsThirdSelected: Story = {
  args: {
    tabCount: 3,
    initialCurrentTab: 2,
  },
  render: (args) => ({
    components: { MultiTabbedDocument },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MultiTabbedDocument v-bind="args">
        <span slot="tab0title">
          First
        </span>
        <div slot="tab0content">
          We need to type enough content here to stretch beyond the width of the tab title.
        </div>
        <span slot="tab1title">
          Second
        </span>
        <div slot="tab1content">
          We should type a different amount of content here.
        </div>
        <span slot="tab2title">
          <b>Third</b>
        </span>
        <div slot="tab2content">
          Then finally, we introduce a third tab. We'll also use this tab to make sure HTML <br />
          renders properly in the document content. <em>And it does</em>.
        </div>
      </MultiTabbedDocument>
    `,
  }),
};

export const OneTabEditor: Story = {
  name: "One Tab (Editor)",
  args: {
    tabCount: 1,
    initialCurrentTab: 0,
    variant: "editor",
  },
  render: (args) => ({
    components: { MultiTabbedDocument },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MultiTabbedDocument v-bind="args">
        <span slot="tab0title">
          MultiTabbedDocument.cs
        </span>
        <pre slot="tab0content"><code>
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
      </MultiTabbedDocument>
`,
  }),
};

export const TwoTabsSecondSelectedEditor: Story = {
  name: "Two Tabs Second Selected (Editor)",
  args: {
    tabCount: 2,
    initialCurrentTab: 1,
    variant: "editor",
  },
  render: (args) => ({
    components: { MultiTabbedDocument },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MultiTabbedDocument v-bind="args">
        <span slot="tab0title">
          MultiTabbedDocument.cs
        </span>
        <pre slot="tab0content"><code>
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
        <span slot="tab1title">
          Page.cs
        </span>
        <pre slot="tab1content"><code>
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
      </MultiTabbedDocument>
`,
  }),
};
