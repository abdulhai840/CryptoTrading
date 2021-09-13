import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {

  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Sidebar from "./Dashboard/Dashboard";
import Setting from "./UserSetting/Setting";
import Profile from "./UserSetting/Profile";
import Security from "./UserSetting/Security";
import Social from "./UserSetting/Social";
import Exchange from "./UserSetting/Exchange";

// eslint-disable-next-line
function NavLink({ children, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  return (
    <Link
      to={to}
      style={{
        color: match ? "red" : "blue",
        borderBottom: `2px solid ${match ? "red" : "transparent"}`
      }}
    >
      {children}
    </Link>
  );
}
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <Sidebar />
            </Route>
          </Switch>
          <Switch>
            <Route path="/Setting" exact>
              <Setting />
            </Route>
            <Route path="/security" exact>
              <Security />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/social" exact>
              <Social />
            </Route>
            <Route path="/exchange" exact>
              <Exchange />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}