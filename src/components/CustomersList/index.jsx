import React, { Component } from "react";
import { array, func } from "prop-types";
import _ from "lodash";
import {
  getGender,
  formatBirthDate,
  formatLastContact
} from "../../utils/customer";

import Button from "../Button";

class CustomersList extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }

  _renderCtrls = ({ id, parentUrl }) => (
    <p className="buttons">
      <Button to={`${parentUrl}/view/${id}`}>
        <span className="icon has-text-info">
          <i className="fas fa-eye" />
        </span>
      </Button>
      <Button to={`${parentUrl}/edit/${id}`}>
        <span className="icon has-text-success">
          <i className="fas fa-pencil-alt" />
        </span>
      </Button>
      <Button to={`${parentUrl}/delete/${id}`}>
        <span className="icon has-text-danger">
          <i className="fas fa-trash-alt" />
        </span>
      </Button>
    </p>
  );

  render() {
    const { customersList, match } = this.props;

    // render null if no data
    if (_.isEmpty(customersList)) {
      return null;
    }

    // fetch first object keys for header table header. Concat an extra key for action controls
    const tblHeaderKeys = _.concat(_.keys(_.first(customersList)), "actions");
    // table header elements
    const tblHeader = _.map(tblHeaderKeys, name => (
      <th key={name}>{_.startCase(name)}</th>
    ));

    // table body elements
    const tblData = _.map(customersList, (customer, rowIndex) => {
      const {
        id,
        name,
        birthday,
        gender,
        lastContact,
        customerLifetimeValue
      } = customer;
      const fullName = `${name.first} ${name.last}`;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{fullName}</td>
          <td>{formatBirthDate(birthday)}</td>
          <td>{getGender(gender)}</td>
          <td>{formatLastContact(lastContact)}</td>
          <td>{customerLifetimeValue}</td>
          <td>{this._renderCtrls({ id, parentUrl: match.url })}</td>
        </tr>
      );
    });

    return (
      <section>
        <div className="container">
          <div className="card events-card">
            <div className="card-content">
              <Button
                className="button is-link is-pulled-right m-b-xs"
                to={`${match.url}/create`}
              >
                <span>Create New Customer</span>
              </Button>
            </div>
            <div className="card-table">
              <div className="content">
                <table className="table is-striped is-hoverable is-fullwidth">
                  <thead>
                    <tr>{tblHeader}</tr>
                  </thead>
                  <tbody>{tblData}</tbody>
                </table>
              </div>
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
