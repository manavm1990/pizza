import ky from "ky";

const BASE_URL = "http://localhost:3001";

const api = ky.create({ prefixUrl: BASE_URL });

export default {
  getPizzas() {
    return api.get("pizzas").json();
  },
  getToppings() {
    return api.get("toppings").json();
  },
};
