import { Route, Switch } from "react-router";
import SignUp from "../SignUp";

function Routes() {
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
}

export default Routes;
