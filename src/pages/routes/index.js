import { Route, Switch } from "react-router";
import SignIn from "../SignIn";

function Routes() {
  return (
    <>
      <Switch>
        <Route>
          <SignIn></SignIn>
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
