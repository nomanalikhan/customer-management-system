import React from "react";
import { array } from "prop-types";
import _ from "lodash";

const Header = ({ columns }) => (
  <thead>
    <tr>{_.map(columns, name => <th key={name}>{_.startCase(name)}</th>)}</tr>
  </thead>
);

Header.propTypes = {
  data: array.isRequired
};

export default Header;
