import { Meta, StoryObj } from "@storybook/vue3";
import { userEvent, within, fn, expect, Mock } from "@storybook/test";
import FoldableTextAreaInteractions from "./FoldableTextAreaInteractions.vue";

const meta: Meta<typeof FoldableTextAreaInteractions> = {
  title: "Foldables/Hydrated/FoldableTextArea",
  component: FoldableTextAreaInteractions,
};

export default meta;
type Story = StoryObj<typeof FoldableTextAreaInteractions>;

export const Submit: Story = {
  args: {
    name: "interaction-test-submit",
    dataTestId: "interaction-test-submit",
    checked: false,
    panelTitle: "Interaction Test: Submit",
    disabled: false,
    textAreaPlaceholder: "placeholder",
    textAreaMaxLength: 100,
    onSubmit: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const foldableTextArea = canvas.getByTestId("interaction-test-submit");

    await step("Enable text area", async () => {
      const checkbox = foldableTextArea.shadowRoot!.querySelector(`[data-testid="checkbox"]`)!;

      await userEvent.click(checkbox);
    });

    await step("Type something interesting", async () => {
      const textArea = foldableTextArea.shadowRoot!.querySelector(`[data-testid="textarea"]`)!;

      await userEvent.type(textArea, "something interesting");
    });

    await step("Submit form", async () => {
      const button = canvas.getByRole("button");

      await userEvent.click(button);

      const call = (args.onSubmit as Mock).mock.calls[0][0];

      const formData = new FormData(call.target);

      const checked = formData.get(`${args.name}-checked`);
      const text = formData.get(`${args.name}-text`);

      await expect(checked).toBe("true");
      await expect(text).toBe("something interesting");
    });
  },
};
