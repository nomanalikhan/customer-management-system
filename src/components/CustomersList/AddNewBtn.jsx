import React from "react";
import { string } from "prop-types";
import Button from "../Button";

const AddNewBtn = ({ url }) => (
  <Button
    className="button is-link is-pulled-right m-b-xs"
    to={`${url}/create`}
  >
    <span>Create New Customer</span>
  </Button>
);

export default AddNewBtn;

AddNewBtn.propTypes = {
  url: string.isRequired
};
