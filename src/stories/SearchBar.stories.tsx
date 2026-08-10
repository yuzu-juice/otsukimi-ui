import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "../components/search-bar";

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "検索したいことを入力するよ",
    buttonLabel: "検索",
    searchLabel: "検索",
  },
};
