import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    label: "チェックしていない",
  },
};

export const StarChecked: Story = {
  args: {
    defaultChecked: true,
    label: "チェックしている",
  },
};

export const MoonChecked: Story = {
  args: {
    variant: "moon",
    defaultChecked: true,
    label: "チェックしている",
  },
};
