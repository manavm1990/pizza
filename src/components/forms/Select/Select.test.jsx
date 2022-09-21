import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

let choices;
let id;
let label;

beforeAll(() => {
  choices = [
    { id: 1, name: "Choice 1" },
    { id: 2, name: "Choice 2" },
    { id: 3, name: "Choice 3" },
  ];

  id = "my-select";
  label = "My Select";
});

describe("Select", () => {
  it("renders a select with the correct options (incl. no value option)", () => {
    const labelOption = "--Select a choice--";

    render(
      <Select
        choices={choices}
        label={label}
        id={id}
        labelOption={labelOption}
      />
    );

    const select = screen.getByLabelText(label);
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(4);

    expect(options[0]).toHaveTextContent(labelOption);
    expect(options[1]).toHaveTextContent(choices[0].name);
  });

  it("renders a select with the correct options (no no value option)", () => {
    render(<Select choices={choices} label={label} id={id} />);

    const select = screen.getByLabelText(label);
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);

    expect(options[0]).toHaveTextContent(choices[0].name);
  });

  it("has the correct value whenever a choice is selected", async () => {
    const user = userEvent.setup();
    render(<Select choices={choices} label={label} id={id} />);

    const select = screen.getByLabelText(label);
    const choice = screen.getByRole("option", { name: choices[1].name });
    await user.selectOptions(select, choice);

    expect(select).toBeInTheDocument();

    expect(select).toHaveValue(choices[1].id.toString());
  });

  it("calls the handleChange function whenever a choice is selected", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <Select
        choices={choices}
        label={label}
        id={id}
        handleChange={handleChange}
      />
    );

    const select = screen.getByLabelText(label);
    const choice = screen.getByRole("option", { name: choices[1].name });
    await user.selectOptions(select, choice);

    expect(handleChange).toHaveBeenCalled();
  });
});
