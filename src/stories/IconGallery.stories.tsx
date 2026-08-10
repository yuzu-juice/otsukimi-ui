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
