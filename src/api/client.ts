const API_BASE_URL = process.env.VUE_APP_API_URL;
import axios, { AxiosInstance } from "axios";

export const client = (): AxiosInstance => {
  return axios.create({ baseURL: API_BASE_URL });
};
