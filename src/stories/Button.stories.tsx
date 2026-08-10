import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";

const focusRing: CSSProperties = {
  border: "2px solid var(--otsukimi-color-brand-primary-deep)",
};

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

export const Focus: Story = {
  render: () => <Button style={focusRing}>フォーカス中</Button>,
};

export const MoonFocus: Story = {
  render: () => (
    <Button variant="moon" style={focusRing}>
      ムーンフォーカス中
    </Button>
  ),
};
