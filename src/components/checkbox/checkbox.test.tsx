import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("toggles when the label is clicked", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="同意する" />);

    const checkbox = screen.getByRole("checkbox", { name: "同意する" });
    expect(checkbox).not.toBeChecked();

    await user.click(screen.getByText("同意する"));
    expect(checkbox).toBeChecked();
  });

  it("does not toggle when disabled", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="同意する" disabled />);

    const checkbox = screen.getByRole("checkbox", { name: "同意する" });
    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
