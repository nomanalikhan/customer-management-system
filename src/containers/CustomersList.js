import { connect } from "react-redux";
import { withJs } from "../utils/immutableWrapper";

import { getCustomers, removeCustomer } from "../actions/customersList.actions";
import CustomersList from "../components/CustomersList";

const mapStateToProps = state => ({
  immutables: state.get("customers")
});

const mapDispatchToProps = dispatch => {
  return {
    getCustomers: () => dispatch(getCustomers()),
    removeCustomer: (cid) => dispatch(removeCustomer(cid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withJs(CustomersList));
