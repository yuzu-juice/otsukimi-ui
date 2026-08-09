import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    state: {
      control: false,
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
  },
};

export const Focus: Story = {
  args: {
    state: "focus",
  },
};

export const Disabled: Story = {
  args: {
    state: "disabled",
  },
};
