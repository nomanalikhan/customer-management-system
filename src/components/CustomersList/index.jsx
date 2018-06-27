import React, { Component } from "react";
import { array, func } from "prop-types";
import _ from "lodash";

import CustomersTable from "./CustomersTable";
import AddNewBtn from "./AddNewBtn";

/**
 * Class representing list of customer.
 * @returns  {HTMLElement}  customers list componentÍ
 * @class
 */
class CustomersList extends Component {
  /**
   * triggers api call to fetch cusomtomers list when component get rendered completely
   */
  componentDidMount() {
    this.props.getCustomers();
  }

  /**
   * renders the list
   * @returns  {HTMLElement}  composed customers list component
   */
  render() {
    const { customersList, removeCustomer, match } = this.props;

    // render null if no data
    if (_.isEmpty(customersList)) {
      return null;
    }

    return (
      <section className="container">
        <div className="card events-card">
          <div className="card-content">
            <AddNewBtn url={match.url} />
          </div>
          <CustomersTable
            data={customersList}
            url={match.url}
            removeCustomer={removeCustomer}
          />
        </div>
      </section>
    );
  }
}

CustomersList.propTypes = {
  customersList: array.isRequired,
  getCustomers: func.isRequired
};

export default CustomersList;
