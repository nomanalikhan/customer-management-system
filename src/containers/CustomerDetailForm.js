import { connect } from "react-redux";
import { withJs } from "../utils/immutableWrapper";

import {
  getCustomerDetails,
  updateCustomerDetails
} from "../actions/customersList.actions";
import CustomerDetailForm from "../components/CustomerDetailForm";

const mapStateToProps = state => ({
  immutables: state.get("customers")
});

const mapDispatchToProps = dispatch => {
  return {
    getCustomerDetails: cid => dispatch(getCustomerDetails(cid)),
    updateCustomerDetails: params => dispatch(updateCustomerDetails(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withJs(CustomerDetailForm));
