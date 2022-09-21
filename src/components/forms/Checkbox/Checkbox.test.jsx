import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

const id = "test";
const label = "Checkbox label";
const handleClick = () => {};

describe("Checkbox", () => {
  it("renders the proper label", () => {
    render(<Checkbox id={id} label={label} handleClick={handleClick} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it("calls the click handler fxn. when clicked", () => {
    const mockHandleClick = jest.fn();
    render(<Checkbox id={id} label={label} handleClick={mockHandleClick} />);

    const checkbox = screen.getByLabelText(label);

    // Must use 'fireEvent' to trigger the click event due to breaking change in RTL 'userEvent' v14
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
