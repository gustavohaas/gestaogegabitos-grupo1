import { Route, Switch } from "react-router";
import Dashboard from "../Dashboard";


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
            </Switch>
        </>
    )
}

export default Routes;