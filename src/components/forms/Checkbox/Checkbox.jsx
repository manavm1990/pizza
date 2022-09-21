import PropTypes from "prop-types";
import { useState } from "react";

function Checkbox({ id, label, name, checked }) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name={name || label.toLowerCase()}
        onClick={() => {
          setIsChecked(!isChecked);
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
