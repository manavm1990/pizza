import { reducer } from "./useMenu";

describe("reducer", () => {
  test("initPizzas", () => {
    const initialState = {};
    const action = {
      type: "initPizzas",
      payload: [{ id: 1, name: "Build Your Own" }],
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      pizzas: [{ id: 1, name: "Build Your Own" }],
    });
  });
});
