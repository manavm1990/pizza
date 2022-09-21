import { useEffect, useReducer } from "react";
import APIService from "services/api";

const api = new APIService();

const reducer = (state, action) => {
  switch (action.type) {
    case "updatePizzas": {
      return { ...state, pizzas: action.payload };
    }
    case "updateToppings": {
      return { ...state, toppings: action.payload };
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function useMenu() {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    api.index("pizzas").then((data) => {
      dispatch({ type: "updatePizzas", payload: data });
    });

    api.index("toppings").then((data) => {
      dispatch({ type: "updateToppings", payload: data });
    });
  });

  return [state, dispatch];
}

export default useMenu;
