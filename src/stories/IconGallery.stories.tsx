import type { Meta, StoryObj } from "@storybook/react";
import { MoonIcon, StarIcon, ChevronDownIcon, ChevronUpIcon } from "../icons";

const icons = [
  { name: "MoonIcon", Component: MoonIcon },
  { name: "StarIcon", Component: StarIcon },
  { name: "ChevronDownIcon", Component: ChevronDownIcon },
  { name: "ChevronUpIcon", Component: ChevronUpIcon },
];

const meta = {
  title: "Icons/Gallery",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 100px)",
        gap: 24,
        textAlign: "center",
      }}
    >
      {icons.map(({ name, Component }) => (
        <div key={name}>
          <Component
            style={{
              width: 32,
              height: 32,
              color: "var(--otsukimi-color-brand-primary)",
            }}
          />
          <div style={{ marginTop: 8, fontSize: 12 }}>{name}</div>
        </div>
      ))}
    </div>
  ),
};
