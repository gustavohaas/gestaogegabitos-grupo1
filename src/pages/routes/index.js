import { Route, Switch } from "react-router";
import SignUp from "../SignUp";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/signUp">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
