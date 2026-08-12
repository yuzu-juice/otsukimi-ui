import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./search-bar";

describe("SearchBar", () => {
  it("tracks input value and submits the trimmed value", async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<SearchBar searchLabel="検索" buttonLabel="検索" onSearch={onSearch} />);

    const input = screen.getByRole("searchbox", { name: "検索" });
    await user.type(input, "  hello  ");
    expect(input).toHaveValue("  hello  ");

    await user.click(screen.getByRole("button", { name: "検索" }));

    expect(onSearch).toHaveBeenCalledWith("hello");
  });

  it("calls onChange with each typed value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SearchBar searchLabel="検索" buttonLabel="検索" onChange={onChange} />);

    await user.type(screen.getByRole("searchbox", { name: "検索" }), "ab");

    expect(onChange).toHaveBeenLastCalledWith("ab");
  });
});
