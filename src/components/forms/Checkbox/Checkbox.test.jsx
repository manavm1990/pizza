import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

const id = "test";
const label = "Test";

describe("Checkbox", () => {
  it("renders the proper label", () => {
    render(<Checkbox id={id} label={label} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it("renders checked when checked is true", () => {
    render(<Checkbox id={id} label={label} checked />);

    expect(screen.getByLabelText(label)).toBeChecked();
  });

  it("renders unchecked when checked is false", () => {
    render(<Checkbox id={id} label={label} />);

    expect(screen.getByLabelText(label)).not.toBeChecked();
  });

  it("calls the click handler fxn. when clicked", () => {
    render(<Checkbox id={id} label={label} />);

    const checkbox = screen.getByLabelText(label);

    // Must use 'fireEvent' to trigger the click event due to breaking change in RTL 'userEvent' v14
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
