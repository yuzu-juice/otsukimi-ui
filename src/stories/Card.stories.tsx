import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <div>カードです</div>
      <div>今日は雨です</div>
      <div>こんにちは</div>
    </Card>
  ),
};
