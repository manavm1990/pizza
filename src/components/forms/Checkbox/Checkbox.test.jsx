import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

it("renders the proper label", () => {
  render(<Checkbox label="My Checkbox" />);

  expect(screen.getByLabelText("My Checkbox")).toBeInTheDocument();
});
