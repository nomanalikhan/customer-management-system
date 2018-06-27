import React, { Component } from "react";
import { array, func } from "prop-types";
import _ from "lodash";

import CustomersTable from "./CustomersTable";
import AddNewBtn from "./AddNewBtn";

class CustomersList extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }

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
