import { useEffect, useReducer } from "react";
import APIService from "services/api";

const api = new APIService();

export const reducer = (state, action) => {
  switch (action.type) {
    case "initPizzas": {
      return { ...state, pizzas: action.payload };
    }
    case "initToppings": {
      return { ...state, toppings: action.payload };
    }
    case "toggleActiveToppings": {
      const { pizzaId } = action.payload;

      const selectedPizza = state.pizzas.find(
        (pizza) => pizza.id === Number(pizzaId)
      );

      const updatedToppings = state.toppings.map((topping) => {
        const isActive = selectedPizza.toppingIds.includes(topping.id);

        return { ...topping, isActive };
      });

      return { ...state, toppings: updatedToppings };
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function useMenu() {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    api.index("pizzas").then((data) => {
      dispatch({ type: "initPizzas", payload: data });
    });

    api.index("toppings").then((data) => {
      dispatch({ type: "initToppings", payload: data });
    });
  }, []);

  return [state, dispatch];
}

export default useMenu;
