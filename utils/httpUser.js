import axios from "axios";

export const requestUser = axios.create({
  baseURL: `https://api.f02.relipa.vn/api/v1/user/en`
});