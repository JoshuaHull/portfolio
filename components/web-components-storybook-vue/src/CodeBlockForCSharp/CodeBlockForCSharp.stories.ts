import { Meta, StoryObj } from "@storybook/vue3";
import CodeBlockForCSharp from "./CodeBlockForCSharp.vue";

const meta: Meta<typeof CodeBlockForCSharp> = {
  component: CodeBlockForCSharp,
};

export default meta;
type Story = StoryObj<typeof CodeBlockForCSharp>;

export const Primary: Story = {
  render: () => ({
    components: { CodeBlockForCSharp },
    template: `
      <CodeBlockForCSharp
        content='public class User {
  public static string Type = "Primary";

  public int Id { get; set; }
}'
        :hideLineNumbers="false"
      />
    `,
  }),
};

export const HideLineNumbers: Story = {
  render: () => ({
    components: { CodeBlockForCSharp },
    template: `
      <CodeBlockForCSharp
        content='public class User {
  public static string Type = "HideLineNumbers";

  public int Id { get; set; }
}'
        :hideLineNumbers="true"
      />
    `,
  }),
};
