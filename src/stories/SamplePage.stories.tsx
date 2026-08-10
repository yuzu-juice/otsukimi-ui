import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, Badge, Button, Card, Divider, Link, ListItem, SearchBar } from "../index";

import "./sample-page.css";

function SamplePage() {
  return (
    <div className="sample-page">
      <header className="sample-page-header">
        <h1>Otsukimi UI</h1>
        <p>ゆめかわ × アクセシブルなUIコンポーネント</p>
      </header>

      <section className="sample-page-section">
        <SearchBar />
      </section>

      <section className="sample-page-section">
        <Card>
          <Badge>Example</Badge>

          <h2>Sample Card</h2>

          <ListItem>生命</ListItem>

          <ListItem variant="dot">宇宙</ListItem>

          <Divider />

          <Link href="#">詳細を見る</Link>
        </Card>
      </section>

      <section className="sample-page-section">
        <Accordion title="よくある質問">これはサンプルの回答です。</Accordion>
      </section>

      <section className="sample-page-section">
        <Button>はじめる</Button>
      </section>
    </div>
  );
}

const meta = {
  title: "Showcase/SamplePage",
  component: SamplePage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SamplePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
