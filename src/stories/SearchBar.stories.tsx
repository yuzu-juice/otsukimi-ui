import { useState } from "react";
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

export const Default: Story = {};

export const Interactive: Story = {
  render: () => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 409 }}>
        <SearchBar onChange={setQuery} onSearch={setResult} />
        <span>入力中: {query}</span>
        <span>検索実行: {result}</span>
      </div>
    );
  },
};
