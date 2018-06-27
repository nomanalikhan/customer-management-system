import React from "react";
import { array } from "prop-types";
import _ from "lodash";

import ActionControls from "../ActionControls";
import Item from "./Item";

import {
  getGender,
  formatBirthDate,
  formatLastContact
} from "../../../utils/customer";

const List = ({ rows }) => {
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
      <ActionControls id={id} url={"ss"} />
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
  rows: []
};

List.propTypes = {
  rows: array.isRequired
};

export default List;
