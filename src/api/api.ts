import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    mode: "no-cors",
  },
});
