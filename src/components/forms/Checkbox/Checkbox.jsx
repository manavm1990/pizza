import PropTypes from "prop-types";

function Checkbox({ id, label, handleClick }) {
  return (
    <label htmlFor={id}>
      <input type="checkbox" onClick={handleClick} id={id} />
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Checkbox;
