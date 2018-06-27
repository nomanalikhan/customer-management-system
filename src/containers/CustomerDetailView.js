import { connect } from "react-redux";
import { withJs } from "../utils/immutableWrapper";

import { getCustomerDetails } from "../actions/customersList.actions";
import CustomerDetailView from "../components/CustomerDetailView";

const mapStateToProps = state => ({
  immutables: state.get("customers")
});

const mapDispatchToProps = dispatch => {
  return {
    getCustomerDetails: cid => dispatch(getCustomerDetails(cid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withJs(CustomerDetailView));
