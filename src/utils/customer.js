import moment from "moment";

export function formatBirthDate(val) {
  return val ? moment(val).format("DD MMMM YYYY") : "";
}

export function formatLastContact(val) {
  return val ? moment(val).format("LLLL") : "";
}

export function getGender(val) {
  return val === "m" ? "Male" : "Female";
}
