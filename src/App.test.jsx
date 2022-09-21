import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Pizzas", () => {
  test("When the page loads, none of the pizza options should be selected", async () => {
    render(<App />);

    // Wait for the options to load ("Build Your Own")
    await screen.findByRole("option", { name: /build/i });

    const selectedOptions = screen.queryAllByRole("option", { selected: true });

    expect(selectedOptions).toHaveLength(1);
    expect(selectedOptions[0]).toHaveValue("");
  });
});
