import type { HTMLAttributes } from "react";
import "./search-bar.css";

type SearchBarProps = HTMLAttributes<HTMLDivElement>;

export function SearchBar(props: SearchBarProps) {
  return (
    <div className="otsukimi-search-bar" {...props}>
      <div className="otsukimi-search-bar-input">検索したいことを入力するよ</div>

      <button className="otsukimi-search-bar-button">検索</button>
    </div>
  );
}
