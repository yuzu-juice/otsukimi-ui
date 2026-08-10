import type { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  DotIcon,
  MoonIcon,
  SparkleIcon,
  StarIcon,
  type IconProps,
} from "../icons";

const icons = [
  { name: "ArrowDownIcon", Component: ArrowDownIcon },
  { name: "ArrowLeftIcon", Component: ArrowLeftIcon },
  { name: "ArrowRightIcon", Component: ArrowRightIcon },
  { name: "ArrowUpIcon", Component: ArrowUpIcon },
  { name: "ChevronDownIcon", Component: ChevronDownIcon },
  { name: "ChevronLeftIcon", Component: ChevronLeftIcon },
  { name: "ChevronRightIcon", Component: ChevronRightIcon },
  { name: "ChevronUpIcon", Component: ChevronUpIcon },
  { name: "DotIcon", Component: DotIcon },
  { name: "MoonIcon", Component: MoonIcon },
  { name: "SparkleIcon", Component: SparkleIcon },
  { name: "StarIcon", Component: StarIcon },
] satisfies Array<{ name: string; Component: ComponentType<IconProps> }>;

const meta = {
  title: "Icons",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 120px)",
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
              color: "var(--otsukimi-color-brand-primary-deep)",
            }}
          />
          <div
            style={{ marginTop: 8, fontSize: 12, color: "var(--otsukimi-color-text-secondary)" }}
          >
            {name}
          </div>
        </div>
      ))}
    </div>
  ),
};

function IconShowcase({ Component, name }: { Component: ComponentType<IconProps>; name: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <Component
        title={name}
        style={{
          width: 64,
          height: 64,
          color: "var(--otsukimi-color-brand-primary-deep)",
        }}
      />
      <div style={{ fontSize: 14, color: "var(--otsukimi-color-text-secondary)" }}>{name}</div>
    </div>
  );
}

export const ArrowDown: Story = {
  render: () => <IconShowcase Component={ArrowDownIcon} name="ArrowDownIcon" />,
};
export const ArrowLeft: Story = {
  render: () => <IconShowcase Component={ArrowLeftIcon} name="ArrowLeftIcon" />,
};
export const ArrowRight: Story = {
  render: () => <IconShowcase Component={ArrowRightIcon} name="ArrowRightIcon" />,
};
export const ArrowUp: Story = {
  render: () => <IconShowcase Component={ArrowUpIcon} name="ArrowUpIcon" />,
};
export const ChevronDown: Story = {
  render: () => <IconShowcase Component={ChevronDownIcon} name="ChevronDownIcon" />,
};
export const ChevronLeft: Story = {
  render: () => <IconShowcase Component={ChevronLeftIcon} name="ChevronLeftIcon" />,
};
export const ChevronRight: Story = {
  render: () => <IconShowcase Component={ChevronRightIcon} name="ChevronRightIcon" />,
};
export const ChevronUp: Story = {
  render: () => <IconShowcase Component={ChevronUpIcon} name="ChevronUpIcon" />,
};
export const Dot: Story = { render: () => <IconShowcase Component={DotIcon} name="DotIcon" /> };
export const Moon: Story = { render: () => <IconShowcase Component={MoonIcon} name="MoonIcon" /> };
export const Sparkle: Story = {
  render: () => <IconShowcase Component={SparkleIcon} name="SparkleIcon" />,
};
export const Star: Story = { render: () => <IconShowcase Component={StarIcon} name="StarIcon" /> };
