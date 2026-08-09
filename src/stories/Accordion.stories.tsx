import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../components/accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Accordion open={open} onToggle={setOpen} title="よくある質問">
        これは、よくある質問です。
        <br />
        ヘッダーをクリックすると開閉できます。
      </Accordion>
    );
  },
};

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
    title: "よくある質問",
    children: (
      <>
        これは、よくある質問です。
        <br />
        最初から開いた状態で表示されます。
      </>
    ),
  },
};
