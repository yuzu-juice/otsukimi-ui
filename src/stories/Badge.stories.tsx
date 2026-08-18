import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/badge/badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "New",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "New",
  },
};

export const Moonlight: Story = {
  args: {
    variant: "moonlight",
    children: "New",
  },
};

export const AccentSoft: Story = {
  args: {
    variant: "accent-soft",
    children: "New",
  },
};
