import { render, screen } from "@testing-library/react";
import Select from "./Select";

let choices;
let id;

beforeAll(() => {
  choices = [
    { id: 1, name: "Choice 1" },
    { id: 2, name: "Choice 2" },
    { id: 3, name: "Choice 3" },
  ];

  id = "my-select";
});

describe("Select", () => {
  it("renders a select with the correct options (incl. no value option)", () => {
    const label = "Make a choice";
    const noValueOption = "--Select a choice--";

    render(<Select choices={choices} label={label} id={id} />);

    const select = screen.getByLabelText(label);
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(4);

    expect(options[0]).toHaveTextContent(noValueOption);
    expect(options[1]).toHaveTextContent("Choice 1");
  });
});
