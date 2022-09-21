import ky from "ky";

const BASE_URL = "http://localhost:3001";

export default class APIService {
  #api;

  constructor(baseURL = BASE_URL) {
    this.#api = ky.create({ prefixUrl: baseURL });
  }

  index(model) {
    return this.#api(model).json();
  }
}
