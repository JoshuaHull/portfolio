import { Meta, StoryObj } from "@storybook/vue3";
import CodeBlockForCSharpTemplate from "./CodeBlockForCSharpTemplate.vue";

const meta: Meta<typeof CodeBlockForCSharpTemplate> = {
  title: "Code Blocks/SSR/CodeBlockForCSharp",
  component: CodeBlockForCSharpTemplate,
};

export default meta;
type Story = StoryObj<typeof CodeBlockForCSharpTemplate>;

export const Primary: Story = {
  args: {
    hideLineNumbers: false,
    content: `public class User {
  public static string Type = "Primary";

  public int Id { get; set; }
}`,
  },
};

export const PrimaryDarkTheme: Story = {
  ...Primary,
  name: "Primary (Dark Theme)",
  parameters: {
    theme: "dark",
  },
};

export const HideLineNumbers: Story = {
  args: {
    hideLineNumbers: true,
    content: `public class User {
  public static string Type = "HideLineNumbers";

  public int Id { get; set; }
}`,
  },
};

export const HideLineNumbersDarkTheme: Story = {
  ...HideLineNumbers,
  name: "Hide Line Numbers (Dark Theme)",
  parameters: {
    theme: "dark",
  },
};
