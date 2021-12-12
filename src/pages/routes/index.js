import { Route, Switch } from "react-router";
import Home from "../Home";
import Dashboard from "../Dashboard";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import EditProfile from "../EditProfile";
import Progress from "../Progress";
import Habits from "../Habits";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/profile">
          <EditProfile />
        </Route>
        <Route path="/progress">
          <Progress />
        </Route>
        <Route path="/habits">
          <Habits />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
