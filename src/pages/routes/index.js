import { Route, Switch } from "react-router";
import Dashboard from "../Dashboard";
import Habits from "../Habits";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/habits">
          <Habits />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
