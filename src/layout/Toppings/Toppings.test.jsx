import { render, screen } from "@testing-library/react";
import Toppings from "./Toppings";

it("renders a checkbox for each topping", () => {
  const double = [
    {
      id: 1,
      name: "Extra Cheese",
    },
    {
      id: 2,
      name: "Pepperoni",
    },
    {
      id: 3,
      name: "Sausage",
    },
  ];

  render(<Toppings toppings={double} />);

  const toppingCheckboxes = screen.getAllByRole("checkbox");

  expect(toppingCheckboxes).toHaveLength(3);

  double.forEach((topping) => {
    expect(screen.getByText(topping.name)).toBeInTheDocument();
  });
});
