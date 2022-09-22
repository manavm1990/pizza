import { reducer } from "./useMenu";

describe("reducer", () => {
  test("initPizzas", () => {
    const payload = [{ id: 1, name: "Build Your Own" }];
    const initialState = {};

    const action = {
      type: "initPizzas",
      payload,
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      pizzas: payload,
    });
  });

  test("initToppings", () => {
    const payload = [{ id: 1, name: "Pepperoni" }];

    const initialState = {};
    const action = {
      type: "initToppings",
      payload,
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      toppings: payload,
    });
  });

    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      toppings: [{ id: 1, name: "Pepperoni" }],
    });
  });
});
