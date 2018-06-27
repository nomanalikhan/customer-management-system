import { get, post, put, remove } from "./httpService";

const url = "users";
export function getCustomers() {
  return get(url);
}

export function getCustomerDetails(id) {
  return get(`${url}/${id}`);
}

export function createCustomer({ formData }) {
  return post(url, formData);
}

export function updateCustomerDetails({ id, formData }) {
  return put(`${url}/${id}`, formData);
}

export function removeCustomer({ id }) {
  return remove(`${url}/${id}`);
}
