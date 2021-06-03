import axios from "axios";

export const API_URL = process.env.API || "http://localhost:3015";

export default axios.create({
  baseURL: API_URL,
});
