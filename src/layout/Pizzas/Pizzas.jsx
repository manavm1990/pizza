import PropTypes from "prop-types";

function Pizzas({ pizzas }) {
  return (
    <select>
      {pizzas.map((pizza) => (
        <option key={pizza.id} value={pizza.id}>
          {pizza.name}
        </option>
      ))}
    </select>
  );
}

Pizzas.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      toppingIds: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
};

export default Pizzas;
