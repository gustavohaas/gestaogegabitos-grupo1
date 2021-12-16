import { Route, Switch } from "react-router";
import Home from "../Home";
import Dashboard from "../Dashboard";
import Groups from "../Groups";
import GroupsAdd from "../GroupsAdd";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import EditProfile from "../EditProfile";
import Habits from "../Habits";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/groups">
          <Groups />
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
        <Route exact path="/habits">
          <Habits />
        </Route>
        <Route exact path="/groupsadd">
          <GroupsAdd />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
