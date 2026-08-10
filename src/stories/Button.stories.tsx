import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン",
  },
};

export const Moon: Story = {
  args: {
    variant: "moon",
    children: "ムーン",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    children: "透明",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "無効",
  },
};
