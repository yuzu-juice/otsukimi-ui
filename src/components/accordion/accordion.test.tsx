import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./accordion";

describe("Accordion", () => {
  it("toggles when uncontrolled", async () => {
    const user = userEvent.setup();
    render(<Accordion title="タイトル">中身</Accordion>);

    const header = screen.getByRole("button", { name: "タイトル" });
    expect(header).toHaveAttribute("aria-expanded", "false");

    await user.click(header);
    expect(header).toHaveAttribute("aria-expanded", "true");

    await user.click(header);
    expect(header).toHaveAttribute("aria-expanded", "false");
  });

  it("stays open when controlled with open prop", async () => {
    const user = userEvent.setup();
    render(
      <Accordion title="タイトル" open>
        中身
      </Accordion>
    );

    const header = screen.getByRole("button", { name: "タイトル" });
    await user.click(header);

    expect(header).toHaveAttribute("aria-expanded", "true");
  });
});
