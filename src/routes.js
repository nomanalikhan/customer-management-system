import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import components for routing

// configure all the routes here inside a swtich statement and export them as a single component
export const Views = () => (
  <Switch>
    <Route path="/" />
  </Switch>
);
