import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "../components/list-item";

const meta = {
  title: "Components/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Star: Story = {
  args: {
    variant: "star",
    children: "生命",
  },
};

export const Dot: Story = {
  args: {
    variant: "dot",
    children: "生命",
  },
};
