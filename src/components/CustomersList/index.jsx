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
    const { customersList, match } = this.props;

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
          <div className="card-table">
            <div className="content">
              <CustomersTable data={customersList} />
            </div>
          </div>
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
