import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "../components/radio-button/radio-button";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    label: "チェックしていない",
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: "チェックしている",
  },
};
