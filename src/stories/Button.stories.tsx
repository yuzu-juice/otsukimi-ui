import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    state: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
    children: "ボタン",
  },
};

export const Focus: Story = {
  args: {
    state: "focus",
    children: "ボタン",
  },
};

export const Disabled: Story = {
  args: {
    state: "disabled",
    children: "ボタン",
  },
};

export const Transparent: Story = {
  args: {
    state: "transparent",
    children: "ボタン",
  },
};

export const Moon: Story = {
  args: {
    state: "moon",
    children: "ボタン",
  },
};

export const MoonFocus: Story = {
  args: {
    state: "moon-focus",
    children: "ボタン",
  },
};
