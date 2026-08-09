import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "../components/radio-button";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    state: {
      control: false,
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    state: "unchecked",
  },
};

export const Checked: Story = {
  args: {
    state: "checked",
  },
};
