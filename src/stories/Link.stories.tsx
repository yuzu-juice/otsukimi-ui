import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../components/link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#top",
    children: "これはリンクです",
  },
};
