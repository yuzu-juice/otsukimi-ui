import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Checkbox,
  Divider,
  Link,
  ListItem,
  RadioButton,
  SearchBar,
} from "../index";
import { MoonIcon } from "../icons";
import "./SamplePage.css";

function SamplePage() {
  return (
    <main className="sample-page">
      <header className="sample-page-header">
        <h1>Hello Otsukimi UI!</h1>

        <div className="sample-page-messages">
          <ListItem>ﾓﾁﾓﾁ!ｶﾜｲｲ!</ListItem>
          <ListItem>ﾕﾒｶﾜﾃﾞｻﾞｲﾝｼｽﾃﾑ</ListItem>
        </div>

        <div className="sample-page-actions">
          <Button>
            <MoonIcon />
            Get started!
          </Button>

          <Button state="transparent">See docs</Button>
        </div>
      </header>

      <section className="sample-page-grid">
        <Card className="sample-card task-card">
          <h2>タスク一覧</h2>

          <SearchBar />

          <div className="task-list">
            <div>
              <span>一つ目のタスク</span>
              <Badge>新規</Badge>
            </div>

            <Divider />

            <div>
              <span>二つ目のタスク</span>
              <Badge>新規</Badge>
            </div>

            <Divider />

            <div>
              <span>三つ目のタスク</span>
              <Badge>進行中</Badge>
            </div>

            <Divider />

            <div>
              <span>四つ目のタスク</span>
              <Badge>進行中</Badge>
            </div>
          </div>

          <Link href="#">すべて見る</Link>
        </Card>

        <Card className="sample-card">
          <h2>よく使う機能</h2>

          {[
            ["ぱ", "ドキュメント"],
            ["ぴ", "コンポーネント"],
            ["ぷ", "アイコン"],
            ["ぺ", "サンプルページ"],
          ].map(([badge, text]) => (
            <div className="feature-item" key={text}>
              <Badge>{badge}</Badge>
              <span>{text}</span>
            </div>
          ))}
        </Card>

        <Card className="sample-card setting-card">
          <h2>設定</h2>

          <h3>テーマ</h3>

          <RadioButton label="ライト" defaultChecked />
          <RadioButton label="ダーク" />

          <h3>通知</h3>

          <Checkbox label="メール通知" defaultChecked />
          <Checkbox label="プッシュ通知" />
          <Checkbox label="郵便通知" defaultChecked />
        </Card>
      </section>

      <Card className="sample-card faq-card">
        <h2>よくある質問</h2>

        <Accordion title="よくある質問" />
        <Accordion title="よくある質問" />
      </Card>
    </main>
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
