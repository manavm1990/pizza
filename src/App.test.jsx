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
  it("activates the correct toppings when toggling between 'Cheese' and 'Meat Lover'", async () => {
    const user = userEvent.setup();

    render(<App />);

    const pizzaSelect = await screen.findByRole("combobox");

    const cheeseOption = await screen.findByRole("option", { name: /cheese/i });
    const meatLoverOption = await screen.findByRole("option", {
      name: /meat lover/i,
    });

    // "Cheese"
    const cheeseCheckbox = await screen.findByRole("checkbox", {
      name: /cheese/i,
    });

    // "Meat Lover"
    const pepperoniCheckbox = await screen.findByRole("checkbox", {
      name: /pepperoni/i,
    });
    const sausageCheckbox = await screen.findByRole("checkbox", {
      name: /sausage/i,
    });
    const baconCheckbox = await screen.findByRole("checkbox", {
      name: /bacon/i,
    });

    await user.selectOptions(pizzaSelect, cheeseOption);

    let checkedToppings = screen.queryAllByRole("checkbox", {
      checked: true,
    });

    // "Cheese" should be checked
    expect(checkedToppings).toHaveLength(1);
    expect(cheeseCheckbox).toBeChecked();
    expect(pepperoniCheckbox).not.toBeChecked();
    expect(sausageCheckbox).not.toBeChecked();
    expect(baconCheckbox).not.toBeChecked();

    await user.selectOptions(pizzaSelect, meatLoverOption);

    checkedToppings = screen.queryAllByRole("checkbox", {
      checked: true,
    });

    // "Meat Lover" should be checked
    expect(checkedToppings).toHaveLength(3);
    expect(cheeseCheckbox).not.toBeChecked();
    expect(pepperoniCheckbox).toBeChecked();
    expect(sausageCheckbox).toBeChecked();
    expect(baconCheckbox).toBeChecked();
  });
});
