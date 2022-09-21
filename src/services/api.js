import ky from "ky";

const BASE_URL = "http://localhost:3001";

const api = ky.create({ prefixUrl: BASE_URL });

export default class APIService {
  constructor(baseURL = BASE_URL) {
    this.fetch = ky.create({ prefixUrl: baseURL });
  }

  index(model) {
    return this.fetch(`${model}`).json();
  }
}
