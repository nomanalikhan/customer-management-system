import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import components for routing
import MainLayout from "./components/MainLayout";

const _renderMainLayout = props => (
  <MainLayout {...props}>
    <Switch>
      <Redirect exact to="/" />
    </Switch>
  </MainLayout>
);

// configure all the routes here inside a swtich statement and export them as a single component
export const Views = () => (
  <Switch>
    <Route path="/" render={_renderMainLayout} />
  </Switch>
);
