import { Route, Switch } from "react-router";
import SignIn from "../SignIn";

function Routes() {
  return (
    <>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
