import { render, screen } from "@testing-library/react";
import Pizzas from "./Pizzas";

it("renders a list of pizzas in a dropdown", () => {
  const double = [
    {
      id: 1,
      name: "Cheese",
      toppingIds: [1],
    },
    {
      id: 2,
      name: "Vegetarian",
      toppingIds: [1, 5, 6, 8],
    },
    {
      id: 3,
      name: "Meat Lover",
      toppingIds: [2, 3, 4],
    },
  ];

  render(<Pizzas pizzas={double} />);

  const dropdown = screen.getByRole("combobox");

  expect(dropdown).toHaveTextContent("Cheese");
  expect(dropdown).toHaveTextContent("Vegetarian");
  expect(dropdown).toHaveTextContent("Meat Lover");
});
