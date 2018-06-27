import React from "react";
import { array, string, func } from "prop-types";
import _ from "lodash";

import ActionControls from "../ActionControls";
import Item from "./Item";

import {
  getGender,
  formatBirthDate,
  formatLastContact
} from "../../../utils/customer";

/**
 * Class representing customers table rows.
 * @param  {array} rows      table rows data
 * @param  {string} url      base url
 * @param  {function} removeCustomer      remove customer
 * @returns  {HTMLElement}  table rows component
 * @class
 */
const List = ({ rows, url, handleRemove }) => {
  const _rows = _.map(rows, row => {
    const { id, name = {} } = row;
    const fullName = `${name.first} ${name.last}`;
    const _columns = [
      id,
      fullName,
      formatBirthDate(row.birthday),
      getGender(row.gender),
      formatLastContact(row.lastContact),
      row.customerLifetimeValue,
      <ActionControls id={id} url={url} handleRemove={handleRemove} />
    ];

    return (
      <tr key={id}>
        {_.map(_columns, column => <Item key={column}>{column}</Item>)}
      </tr>
    );
  });

  return <tbody>{_rows}</tbody>;
};

List.defaultProps = {
  rows: [],
  url: "",
  handleRemove: () => {}
};

List.propTypes = {
  rows: array.isRequired,
  url: string.isRequired,
  handleRemove: func.isRequired
};

export default List;
