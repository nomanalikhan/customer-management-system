import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import components for routing
import MainLayout from "./components/MainLayout";
import CustomersList from "./containers/CustomersList";

const _renderMainLayout = props => (
  <MainLayout {...props}>
    <Switch>
      <Route exact path="/customers" component={CustomersList} />
      <Redirect exact to="/customers" />
    </Switch>
  </MainLayout>
);

// configure all the routes here inside a swtich statement and export them as a single component
export const Views = () => (
  <Switch>
    <Route path="/" render={_renderMainLayout} />
    <Redirect exact to="/customers" />
  </Switch>
);
