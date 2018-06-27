import { connect } from "react-redux";
import { withJs } from "../utils/immutableWrapper";

import { getCustomers } from "../actions/customersList.actions";
import CustomersList from "../components/CustomersList";

const mapStateToProps = state => ({
  immutables: state.get("customers")
});

const mapDispatchToProps = dispatch => {
  return {
    getCustomers: () => dispatch(getCustomers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withJs(CustomersList));
