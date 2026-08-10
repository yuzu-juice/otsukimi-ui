import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Link,
  ListItem,
  RadioButton,
  SearchBar,
} from "../index";
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
          <Button variant="moon">Get started!</Button>

          <Button variant="transparent">See docs</Button>
        </div>
      </header>

      <section className="sample-page-grid">
        <Card className="sample-card task-card">
          <h2>タスク一覧</h2>

          <SearchBar
            placeholder="タスクを検索するよ"
            buttonLabel="検索"
            searchLabel="タスクを検索"
          />

          <div className="task-list">
            <div>
              <span>一つ目のタスク</span>
              <Badge variant="moonlight">新規</Badge>
            </div>

            <Divider />

            <div>
              <span>二つ目のタスク</span>
              <Badge variant="moonlight">新規</Badge>
            </div>

            <Divider />

            <div>
              <span>三つ目のタスク</span>
              <Badge variant="primary">進行中</Badge>
            </div>

            <Divider />

            <div>
              <span>四つ目のタスク</span>
              <Badge variant="primary">進行中</Badge>
            </div>
          </div>

          <Link href="#">すべて見る</Link>
        </Card>

        <Card className="sample-card">
          <h2>よく使う機能</h2>

          {(
            [
              ["ぱ", "ドキュメント", "default"],
              ["ぴ", "コンポーネント", "primary"],
              ["ぷ", "アイコン", "moonlight"],
              ["ぺ", "サンプルページ", "accent-soft"],
            ] as const
          ).map(([badge, text, variant]) => (
            <Card className="feature-item" key={text}>
              <Badge variant={variant}>{badge}</Badge>
              <span>{text}</span>
            </Card>
          ))}
        </Card>

        <Card className="sample-card setting-card">
          <h2>設定</h2>

          <h3>テーマ</h3>

          <RadioButton name="theme" label="ライト" defaultChecked />
          <RadioButton name="theme" label="ダーク" />

          <h3>通知</h3>

          <Checkbox label="メール通知" defaultChecked />
          <Checkbox label="プッシュ通知" />
        </Card>
      </section>

      <section className="sample-page-states">
        <Card className="sample-card state-card">
          <h2>ボタン</h2>

          <div className="state-row">
            <Button>デフォルト</Button>
            <Button variant="moon">ムーン</Button>
            <Button variant="transparent">透明</Button>
            <Button disabled>無効</Button>
          </div>
        </Card>

        <Card className="sample-card state-card">
          <h2>入力</h2>

          <div className="state-col">
            <Input placeholder="デフォルト" />
            <Input placeholder="無効" disabled />
          </div>
        </Card>

        <Card className="sample-card state-card">
          <h2>バッジ</h2>

          <div className="state-row">
            <Badge>デフォルト</Badge>
            <Badge variant="primary">プライマリ</Badge>
            <Badge variant="moonlight">ムーンライト</Badge>
            <Badge variant="accent-soft">アクセント</Badge>
          </div>
        </Card>
      </section>

      <Card className="sample-card faq-card">
        <h2>よくある質問</h2>

        <Accordion title="よくある質問って何?" defaultOpen>
          これは、よくある質問です。よくある質問というのは、頻繁に問い合わせがあるということになりますので、
          よくあるということになります。つまり、ここに書いてあることはよく質問を受ける事項となっておりますので、
          よく質問を受けています。
        </Accordion>

        <Accordion title="React 19が必要?">
          はい。otsukimi-ui は React 19 を peerDependency に持つため、 React 19 以上が必要です。
        </Accordion>
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
