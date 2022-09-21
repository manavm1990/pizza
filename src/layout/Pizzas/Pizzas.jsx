import Select from "components/forms/Select/Select";
import PropTypes from "prop-types";

function Pizzas({ pizzas }) {
  return (
    <Select
      choices={pizzas}
      label="Pizza"
      id="pizza"
      labelOption="Choose a pizza"
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
};

export default Pizzas;
