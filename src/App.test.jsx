import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Pizzas", () => {
  it("shows loading until Pizzas are loaded", async () => {
    render(<App />);

    expect(screen.getByText("Loading Pizzas...")).toBeInTheDocument();

    // Wait for the options to load ("Build Your Own")
    await screen.findByRole("option", { name: /build/i });

    expect(screen.queryByText("Loading Pizzas...")).not.toBeInTheDocument();
  });

  it("has all of the pizzas in the select", async () => {
    render(<App />);

    // Wait for the options to load ("Build Your Own")
    await screen.findByRole("option", { name: /build/i });

    const options = screen.getAllByRole("option");

    // 6 options including "Choose a Pizza" (no value)
    expect(options).toHaveLength(6);
  });

  test("When the page loads, none of the pizza options should be selected", async () => {
    render(<App />);

    // Wait for the options to load ("Build Your Own")
    await screen.findByRole("option", { name: /build/i });

    const selectedOptions = screen.queryAllByRole("option", { selected: true });

    expect(selectedOptions).toHaveLength(1);
    expect(selectedOptions[0]).toHaveValue("");
  });
});

describe("Toppings", () => {
  it("shows loading until Toppings are loaded", async () => {
    render(<App />);

    expect(screen.getByText("Loading Toppings...")).toBeInTheDocument();

    await screen.findByRole("checkbox", { name: /pepperoni/i });

    expect(screen.queryByText("Loading Toppings...")).not.toBeInTheDocument();
  });

  it("has all of the toppings checkboxes", async () => {
    render(<App />);

    await screen.findByRole("checkbox", { name: /pepperoni/i });

    const checkboxes = screen.getAllByRole("checkbox");

    // 10 toppings
    expect(checkboxes).toHaveLength(10);
  });

  test("When the page loads, none of the toppings should be checked", async () => {
    render(<App />);

    // Wait for toppings to load ("Pepperoni")
    await screen.findByRole("checkbox", { name: /pepperoni/i });

    // Get all checkboxes that are checked
    const checkedToppings = screen.queryAllByRole("checkbox", {
      checked: true,
    });

    // There should be none
    expect(checkedToppings).toHaveLength(0);
  });
});

describe("Pizza Toppings", () => {
  test("Whenever any preset pizza is selected ONLY the associated toppings should be checked", async () => {
    const user = userEvent.setup();

    render(<App />);

    const pizzaSelect = await screen.findByRole("combobox");

    const cheeseOption = await screen.findByRole("option", { name: /cheese/i });
    const vegetarianOption = await screen.findByRole("option", {
      name: /vegetarian/i,
    });
    const allInOption = await screen.findByRole("option", { name: /all/i });

    user.selectOptions(pizzaSelect, cheeseOption);

    let checked = screen.queryAllByRole("checkbox", { checked: true });

    // Cheese
    expect(checked).toHaveLength(1);
    expect(checked[0]).toHaveValue("1");

    user.selectOptions(pizzaSelect, vegetarianOption);

    checked = screen.queryAllByRole("checkbox", { checked: true });

    // Vegetarian - 4 toppings
    expect(checked).toHaveLength(4);
    expect(checked[0]).toHaveValue("1");
    expect(checked[1]).toHaveValue("5");
    expect(checked[2]).toHaveValue("6");
    expect(checked[3]).toHaveValue("8");

    user.selectOptions(pizzaSelect, allInOption);

    checked = screen.queryAllByRole("checkbox", { checked: true });

    // All In - 8 toppings
    expect(checked).toHaveLength(8);
    expect(checked[0]).toHaveValue("1");
    expect(checked[1]).toHaveValue("2");
    expect(checked[2]).toHaveValue("3");
    expect(checked[3]).toHaveValue("4");
    expect(checked[4]).toHaveValue("5");
    expect(checked[5]).toHaveValue("6");
    expect(checked[6]).toHaveValue("7");
    expect(checked[7]).toHaveValue("8");
  });
});
