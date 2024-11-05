import { User } from "../../pages/context/types";
import { API } from "../api";
import { Login } from "./types";

const BASE_URL = "/auth";

export const postLogin = async (body: Login) => {
  return API.post<User>(BASE_URL, body);
};
