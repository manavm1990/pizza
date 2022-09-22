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

  test("toggleActiveToppings", () => {
    const pizzas = [
      {
        id: 1,
        name: "Meaty Duo",
        toppingIds: [1, 2],
      },
    ];
    const initialState = {
      pizzas,
      toppings: [
        { id: 1, name: "Pepperoni" },
        { id: 2, name: "Sausage" },
        { id: 3, name: "Canadian Bacon" },
      ],
    };
    const action = {
      type: "toggleActiveToppings",
      payload: { pizzaId: 1 },
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      pizzas,
      toppings: [
        { id: 1, name: "Pepperoni", isActive: true },
        { id: 2, name: "Sausage", isActive: true },
        { id: 3, name: "Canadian Bacon", isActive: false },
      ],
    });
  });
});
