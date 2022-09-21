import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Pizzas", () => {
  test("When the page loads, none of the options should be selected", async () => {
    render(<App />);

    await screen.findByLabelText("Choose a pizza");
    const selectedOptions = screen.queryAllByRole("option", { selected: true });

    expect(selectedOptions).toHaveLength(0);
  });
});
