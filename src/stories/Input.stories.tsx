import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "テキストを入力してね",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "無効",
    disabled: true,
  },
};
