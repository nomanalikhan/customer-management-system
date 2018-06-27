import React from "react";
import { any } from "prop-types";

const Item = ({ children }) => <td>{children}</td>;

Item.propTypes = {
  data: any.isRequired
};

export default Item;
