import React from "react";
import { object, string } from "prop-types";
import _ from "lodash";

import Header from "./Header";
import {
  getGender,
  formatBirthDate,
  formatLastContact
} from "../../utils/customer";

const GridItem = ({ data: { value, label } }) => (
  <React.Fragment key={value}>
    <div className="column is-2 has-text-weight-semibold">{label}</div>
    <div className="column is-4">{value}</div>
  </React.Fragment>
);

const GridList = ({ column }) => (
  <div className="columns">
    {_.map(column, (data, index) => <GridItem key={index} data={data} />)}
  </div>
);

const DataGrid = ({ details, url }) => {
  const { gender, birthday, lastContact, customerLifetimeValue } = details;

  const gridConfig = {
    column1: [
      {
        label: "Gender",
        value: getGender(gender)
      },
      {
        label: "Birthday",
        value: formatBirthDate(birthday)
      }
    ],
    column2: [
      {
        label: "Last Contact",
        value: formatLastContact(lastContact)
      },
      {
        label: "Customer Lifetime Value",
        value: customerLifetimeValue
      }
    ]
  };

  const _gridData = _.map(gridConfig, (column, columnKey) => (
    <GridList key={columnKey} column={column} />
  ));

  return (
    <div className="section">
      <div className="columns is-multiline is-mobile">
        <Header details={details} url={url} />
        <div className="column">{_gridData}</div>
      </div>
    </div>
  );
};

DataGrid.defaultProps = {
  details: {},
  url: ""
};

DataGrid.propTypes = {
  details: object.isRequired,
  url: string.isRequired
};

export default DataGrid;
