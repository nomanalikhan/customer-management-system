import React from "react";
import { array } from "prop-types";
import _ from "lodash";

/**
 * Class representing customers table header.
 * @param  {array} columns      headers items
 * @returns  {HTMLElement}  header component
 * @class
 */
const Header = ({ columns }) => (
  <thead>
    <tr>{_.map(columns, name => <th key={name}>{_.startCase(name)}</th>)}</tr>
  </thead>
);

Header.defaultProps = {
  data: []
}

Header.propTypes = {
  data: array.isRequired
};

export default Header;
