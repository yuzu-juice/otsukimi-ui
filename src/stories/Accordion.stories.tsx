import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../components/accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: {
      control: false,
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    open: false,
    title: "よくある質問",
  },
};

export const Open: Story = {
  args: {
    open: true,
    title: "よくある質問",
    children: (
      <>
        これは、よくある質問です。
        <br />
        よくある質問というのは、頻繁に問い合わせがあるということになります。
        <br />
        つまり、ここに書いてあることはよく質問を受ける事項となっております。
      </>
    ),
  },
};
