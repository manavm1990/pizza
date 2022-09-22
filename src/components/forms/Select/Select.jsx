import PropTypes from "prop-types";

function Select({ choices, label, id, labelOption, handleChange }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select id={id} onChange={handleChange}>
        {labelOption && <option value="">{labelOption}</option>}
        {choices.map((choice) => (
          <option key={choice.id} value={choice.id}>
            {choice.name}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelOption: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  labelOption: null,
};

export default Select;
