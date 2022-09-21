import ky from "ky";

const BASE_URL = "http://localhost:3001";

const api = ky.create({ prefixUrl: BASE_URL });

export default {
  index(model) {
    return api.get(model).json();
  },
};
