import { get } from "./httpService";

const url = "users";
export function getCustomers() {
  return get(url);
}

export function getCustomerDetails(id) {
  return get(`${url}/${id}`);
}
