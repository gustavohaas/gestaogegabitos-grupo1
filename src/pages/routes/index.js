import { Route, Switch } from "react-router";

import Dashboard from "../Dashboard";
import SignIn from "../SignIn";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
