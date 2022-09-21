import PropTypes from "prop-types";

function Checkbox({ label }) {
  return (
    <label>
      <input type="checkbox" />
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;
