import React from "react";
import { array } from "prop-types";
import _ from "lodash";

import Header from "./Header";
import List from "./List";

const CustomersTable = ({ data }) => {
  // fetch first object keys for header table header. Concat an extra key for action controls
  const tblHeaderKeys = _.concat(_.keys(_.first(data)), "actions");

  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <Header columns={tblHeaderKeys} />
      <List rows={data} />
    </table>
  );
};

CustomersTable.propTypes = {
  data: array.isRequired
};

export default CustomersTable;
