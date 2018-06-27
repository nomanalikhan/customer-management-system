import React from "react";
import { array, string, func } from "prop-types";
import _ from "lodash";

import Header from "./Header";
import List from "./List";

/**
 * Class representing customer list table component.
 * @param  {array} data      customers list
 * @param  {string} url      base url
 * @param  {function} removeCustomer      remove customer
 * @returns  {HTMLElement}  customer table component
 * @class
 */
const CustomersTable = ({ data, url, removeCustomer }) => {
  // fetch first object keys for header table header. Concat an extra key for action controls
  /** @const {array}
   * @memberOf CustomersTable
   */
  const tblHeaderKeys = _.concat(_.keys(_.first(data)), "actions");

  return (
    <div className="card-table">
      <div className="content">
        <table className="table is-striped is-hoverable is-fullwidth">
          <Header columns={tblHeaderKeys} />
          <List rows={data} url={url} handleRemove={removeCustomer} />
        </table>
      </div>
    </div>
  );
};

CustomersTable.defaultProps = {
  data: [],
  url: "",
  removeCustomer: () => {}
};

CustomersTable.propTypes = {
  data: array.isRequired,
  url: string.isRequired,
  removeCustomer: func.isRequired
};

export default CustomersTable;
