import React, { Component } from "react";
import { object, func } from "prop-types";
import _ from "lodash";

import Button from "../Button";
import InputField from "../InputField";
import SelectField from "../SelectField";
import DatePicker from "../DatePicker";

/** @const {array}
 * @memberOf CustomerDetailForm
 */
const _genderLookup = [
  { value: "m", label: "Male" },
  { value: "w", label: "Female" }
];

/**
 * Class representing customer detail form component.
 * @param  {function} handleChange      parent onchange function
 * @returns  {HTMLElement}  customer detail component
 * @class
 */
class CustomerDetailForm extends Component {
  /**
   * @constructs CustomerDetailForm
   * @param {object} parent props
   */
  constructor(props) {
    super(props);
    this.state = {
      details: _.extend({}, { gender: "m" }, props.details)
    };
  }

  /**
   * triggers api call to fetch cusomtomer details when component get rendered completely
   */
  componentDidMount() {
    const { match } = this.props;
    if (match.params.id) {
      this.props.getCustomerDetails(match.params.id);
    }
  }

  /**
   * triggers everytime when there's any change on parent passed properties. updates details local object if there's any change
   */
  componentWillReceiveProps({ details }) {
    if (!_.isEqual(details, this.props.details)) {
      this.setState({ details });
    }
  }

  /**
   * triggers parent onchage function. a closure that take the state key initially and make the changes accordingly
   * @param {string} key state variable
   * @param {string} val change propogate form child components or fields
   */
  _handleChange = key => val => {
    this.setState(({ details }) => {
      if (_.includes(["first", "last"], key)) {
        if (!details.name) {
          details.name = {};
        }
        details.name[key] = val;
      } else {
        details[key] = val;
      }

      return { details };
    });
  };

  /**
   * triggers the action that make the api call to update customer details.
   */
  _handleUpdate = () => {
    const { match } = this.props;
    this.props.updateCustomerDetails({
      cid: match.params.id,
      formData: this.state.details
    });
  };

  /**
   * triggers the action that make the api call to create new customer.
   */
  _handleCreate = () => {
    this.props.createCustomer({
      formData: this.state.details
    });
  };

  /**
   * renders the form
   * @returns  {HTMLElement}  composed customer detail form component
   */
  render() {
    const { _handleChange, _handleCreate, _handleUpdate } = this;
    const { details = {} } = this.state;

    const {
      id,
      name = {},
      birthday,
      customerLifetimeValue,
      gender,
      lastContact
    } = details;

    return (
      <section>
        <div className="container">
          <div className="card events-card">
            <div className="card-content">
              <div className="section">
                <div className="columns is-multiline is-mobile">
                  <div className="column is-8">
                    <p className="">
                      <span className="title">Edit Customer</span>
                    </p>
                  </div>
                  <div className="column is-4">
                    <Button
                      className="button is-success is-pulled-right m-l-xs"
                      onClick={id ? _handleUpdate : _handleCreate}
                    >
                      <span className="icon">
                        <i className="fas fa-save" />
                      </span>
                      <span>{id ? "Update & Close" : "Save & Close"}</span>
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
                        First Name
                      </div>
                      <div className="column is-4">
                        <InputField
                          name={"first"}
                          value={name.first}
                          handleChange={_handleChange("first")}
                          placeholder={"Enter First Name"}
                          required
                        />
                      </div>

                      <div className="column is-2 has-text-weight-semibold">
                        Last Name
                      </div>
                      <div className="column is-4">
                        <InputField
                          name={"last"}
                          value={name.last}
                          handleChange={_handleChange("last")}
                          placeholder={"Enter Last Name"}
                          required
                        />
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-2 has-text-weight-semibold">
                        Gender
                      </div>
                      <div className="column is-4">
                        <SelectField
                          name={"gender"}
                          value={gender}
                          options={_genderLookup}
                          handleChange={_handleChange("gender")}
                          required
                        />
                      </div>

                      <div className="column is-2 has-text-weight-semibold">
                        Birthday
                      </div>
                      <div className="column is-4">
                        <DatePicker
                          value={birthday}
                          handleChange={_handleChange("birthday")}
                          format={"YYYY-MM-DD"}
                        />
                      </div>
                    </div>

                    <div className="columns">
                      <div className="column is-2 has-text-weight-semibold">
                        Last Contact
                      </div>
                      <div className="column is-4">
                        <DatePicker
                          value={lastContact}
                          handleChange={_handleChange("lastContact")}
                        />
                      </div>

                      <div className="column is-2 has-text-weight-semibold">
                        Customer Lifetime Value
                      </div>
                      <div className="column is-4">
                        <InputField
                          name={"customerLifetimeValue"}
                          value={customerLifetimeValue}
                          handleChange={_handleChange("customerLifetimeValue")}
                          placeholder={"Enter Customer Lifetime Value"}
                          required
                        />
                      </div>
                    </div>
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

CustomerDetailForm.propTypes = {
  details: object.isRequired,
  getCustomerDetails: func.isRequired,
  updateCustomerDetails: func.isRequired
};

export default CustomerDetailForm;
