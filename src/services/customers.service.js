import { get } from "./httpService";

const url = "users";
export function getCustomers() {
  return get(url);
}
