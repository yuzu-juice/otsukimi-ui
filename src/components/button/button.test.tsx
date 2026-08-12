import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("does not submit a form by default", () => {
    const onSubmit = vi.fn((e: { preventDefault: () => void }) => e.preventDefault());
    render(
      <form onSubmit={onSubmit}>
        <Button>OK</Button>
      </form>
    );

    fireEvent.click(screen.getByRole("button", { name: "OK" }));

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submits the form when type is overridden to submit", () => {
    const onSubmit = vi.fn((e: { preventDefault: () => void }) => e.preventDefault());
    render(
      <form onSubmit={onSubmit}>
        <Button type="submit">OK</Button>
      </form>
    );

    fireEvent.click(screen.getByRole("button", { name: "OK" }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
