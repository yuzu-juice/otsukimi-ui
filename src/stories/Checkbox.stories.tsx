import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    state: {
      control: false,
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    state: "unchecked",
  },
};

export const StarChecked: Story = {
  args: {
    state: "star-checked",
  },
};

export const MoonChecked: Story = {
  args: {
    state: "moon-checked",
  },
};
