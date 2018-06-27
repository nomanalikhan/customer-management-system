import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// import components for routing
import MainLayout from "./components/MainLayout";
import CustomersList from "./containers/CustomersList";
import CustomerDetailView from "./containers/CustomerDetailView";
import CustomerDetailForm from "./containers/CustomerDetailForm";

const _renderMainLayout = props => (
  <MainLayout {...props}>
    <Switch>
      <Route exact path="/customers" component={CustomersList} />
      <Route exact path="/customers/create" component={CustomerDetailForm} />
      <Route exact path="/customers/view/:id" component={CustomerDetailView} />
      <Route exact path="/customers/edit/:id" component={CustomerDetailForm} />
      <Redirect exact to="/customers" />
    </Switch>
  </MainLayout>
);

// configure all the routes here inside a swtich statement and export them as a single component
export const Views = () => (
  <Router>
    <Switch>
      <Route path="/" render={_renderMainLayout} />
      <Redirect exact to="/customers" />
    </Switch>
  </Router>
);
