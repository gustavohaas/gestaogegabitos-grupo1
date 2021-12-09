import { Route, Switch } from "react-router";
import Dashboard from "../Dashboard";
import SignIn from '../SignIn';
import SignUp from '../SignUp';

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
                <Route path='/signin'>
                  <SignIn />
                 </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
            </Switch>
        </>
    )
}

export default Routes;