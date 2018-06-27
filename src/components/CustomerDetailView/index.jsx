import React, { Component } from "react";
import { object, func } from "prop-types";
import _ from "lodash";

import Button from "../Button";
import {
  getGender,
  formatBirthDate,
  formatLastContact
} from "../../utils/customer";

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

    const {
      name,
      birthday,
      customerLifetimeValue,
      gender,
      lastContact
    } = details;

    const fullName = _.startCase(`${name.first} ${name.last}`);

    return (
      <section className="container">
        <div className="card events-card">
          <div className="card-content">
            <div className="section">
              <div className="columns is-multiline is-mobile">
                <div className="column is-8">
                  <h2 className="title">{fullName}</h2>
                </div>
                <div className="column is-4">
                  <Button
                    className="button is-success is-pulled-right m-l-xs"
                    to={`/customers/edit/${match.params.id}`}
                  >
                    <span className="icon">
                      <i className="fas fa-pencil-alt" />
                    </span>
                    <span>Edit</span>
                  </Button>
                  <Button
                    className="button is-link is-pulled-right"
                    to="/customers"
                  >
                    <span className="icon">
                      <i className="fas fa-chevron-left" />
                    </span>
                    <span>Back</span>
                  </Button>
                </div>

                <div className="column">
                  <div className="columns">
                    <div className="column is-2 has-text-weight-semibold">
                      Gender
                    </div>
                    <div className="column is-4">{getGender(gender)}</div>

                    <div className="column is-2 has-text-weight-semibold">
                      Birthday
                    </div>
                    <div className="column is-4">
                      {formatBirthDate(birthday)}
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column is-2 has-text-weight-semibold">
                      Last Contact
                    </div>
                    <div className="column is-4">
                      {formatLastContact(lastContact)}
                    </div>

                    <div className="column is-2 has-text-weight-semibold">
                      Customer Lifetime Value
                    </div>
                    <div className="column is-4">{customerLifetimeValue}</div>
                  </div>
                </div>
              </div>
            </div>
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
