import React, { Component } from "react";
import { object, func } from "prop-types";
import _ from "lodash";

import DataGrid from "./DataGrid";

class CustomerDetailView extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getCustomerDetails(match.params.id);
  }

  render() {
    const { details = {}, match } = this.props;
    if (_.isEmpty(details)) {
      return null;
    }

    return (
      <section className="container">
        <div className="card events-card">
          <div className="card-content">
            <DataGrid details={details} url={match.params.id} />
          </div>
        </div>
      </section>
    );
  }
}

CustomerDetailView.defaultProps = {
  details: {},
  getCustomerDetails: () => {}
};

CustomerDetailView.propTypes = {
  details: object.isRequired,
  getCustomerDetails: func.isRequired
};

export default CustomerDetailView;
