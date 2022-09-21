import PropTypes from "prop-types";

function Checkbox({ id, label, name, handleClick }) {
  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name={name || label.toLowerCase()}
        onClick={handleClick}
      />
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  name: null,
};

export default Checkbox;
