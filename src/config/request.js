import axios from "axios";
const requst = axios.create({ baseURL: "http://localhost:3000" });

export { requst };
