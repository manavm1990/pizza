import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

const id = "test";
const label = "Checkbox label";
const handleClick = () => {};

describe("Checkbox", () => {
it("renders the proper label", () => {
    render(<Checkbox id={id} label={label} handleClick={handleClick} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });


  expect(screen.getByLabelText("My Checkbox")).toBeInTheDocument();
});
