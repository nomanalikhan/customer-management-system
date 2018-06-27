import React from "react";
import { any } from "prop-types";

/**
 * Class representing customers table cell.
 * @param  {*} children      table cell
 * @returns  {HTMLElement}  table cell component
 * @class
 */
const Item = ({ children }) => <td>{children}</td>;

Item.defaultProps = {
  data: []
};

Item.propTypes = {
  data: any.isRequired
};

export default Item;
