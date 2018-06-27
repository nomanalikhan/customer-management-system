import axios from "axios";

export const CancelToken = axios.CancelToken;

const baseURL = "https://webtrekk-cms-backend.herokuapp.com/";

const instance = axios.create({
  baseURL,
  timeout: 35000
});

export function get(url, params) {
  return instance.get(url, params);
}

export function post(url, params) {
  return instance.post(url, params);
}

export function put(url, params) {
  return instance.put(url, params);
}

export function remove(url, params) {
  return instance.delete(url);
}
