import { Meta, StoryObj } from "@storybook/vue3";
import FoldableTextArea from "./FoldableTextArea.vue";

const meta: Meta<typeof FoldableTextArea> = {
  component: FoldableTextArea,
};

export default meta;
type Story = StoryObj<typeof FoldableTextArea>;

export const Primary: Story = {
  render: () => ({
    components: { FoldableTextArea },
    template: `
      <FoldableTextArea
        checkboxId="1234"
        checkboxName="expanded-checkbox"
        :defaultChecked="false"
        panelTitle="Primary Foldable TextArea"
        :disabled="false"
        textAreaPlaceholder="placeholder"
        textAreaName="expanded-textarea"
        :textAreaMaxLength="100"
        textAreaValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
    `,
  }),
};

export const Expanded: Story = {
  render: () => ({
    components: { FoldableTextArea },
    template: `
      <FoldableTextArea
        checkboxId="1234"
        checkboxName="expanded-checkbox"
        :defaultChecked="true"
        panelTitle="Expanded Foldable TextArea"
        :disabled="false"
        textAreaPlaceholder="placeholder"
        textAreaName="expanded-textarea"
        :textAreaMaxLength="100"
        textAreaValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
    `,
  }),
};
