import { Select } from "components/forms";
import PropTypes from "prop-types";

function Pizzas({ pizzas, select }) {
  return (
    <Select
      choices={pizzas}
      label="Pizza"
      id="pizza"
      labelOption="Choose a pizza"
      handleChange={select}
    />
  );
}

Pizzas.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      toppingIds: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  select: PropTypes.func.isRequired,
};

export default Pizzas;
