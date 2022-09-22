import useChecked from "hooks/useChecked";
import PropTypes from "prop-types";

function Checkbox({ id, label, name, checked }) {
  const [isChecked, toggle] = useChecked(checked);

  return (
    <div className="flex items-center gap-x-2">
      <input
        type="checkbox"
        id={id}
        name={name || label.toLowerCase()}
        onChange={() => {
          toggle();
        }}
        checked={isChecked}
      />{" "}
      <label htmlFor={id}>{label}</label>
    </div>
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
