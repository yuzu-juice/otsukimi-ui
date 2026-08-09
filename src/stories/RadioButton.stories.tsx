import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "../components/radio-button";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: "チェックしている",
  },
};

export const Group: Story = {
  render: () => {
    const [value, setValue] = useState("star");
    return (
      <fieldset style={{ border: "none", display: "flex", flexDirection: "column", gap: 12 }}>
        <legend>どのアイコンが好き?</legend>
        <RadioButton
          name="favorite"
          value="star"
          checked={value === "star"}
          onChange={() => setValue("star")}
          label="スター"
        />
        <RadioButton
          name="favorite"
          value="moon"
          checked={value === "moon"}
          onChange={() => setValue("moon")}
          label="ムーン"
        />
      </fieldset>
    );
  },
};
