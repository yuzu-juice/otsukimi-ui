import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/divider/divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};

export const Dashed: Story = {
  args: {
    variant: "dashed",
  },
};
