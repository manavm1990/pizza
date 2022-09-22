import useChecked from "hooks/useChecked";
import PropTypes from "prop-types";

function Checkbox({ id, label, name, checked }) {
  const [isChecked, toggle] = useChecked(checked);

  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name={name || label.toLowerCase()}
        onChange={() => {
          toggle();
        }}
        checked={isChecked}
      />
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  name: null,
  checked: false,
};

export default Checkbox;
