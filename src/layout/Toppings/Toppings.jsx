import { Checkbox } from "components/forms";
import PropTypes from "prop-types";

function Toppings({ toppings }) {
  return toppings.map((topping) => (
    <Checkbox
      key={topping.id}
      id={topping.id.toString()}
      label={topping.name}
      name={topping.id.toString()}
      checked={topping.isActive}
    />
  ));
}

Toppings.propTypes = {
  toppings: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
    })
  ),
};

export default Toppings;
