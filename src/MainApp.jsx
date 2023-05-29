import { AppBar, Tabs, Tab } from "@mui/material";
import { Outlet, Link, matchPath, useLocation, NavLink } from "react-router-dom";
import TinmanLogo from "./TinmanLogo.jsx"

function MainApp() {
  return (<>
    <TinmanLogo />
    <MyTabs />
    <Outlet />
  </>);
}

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['/', '/graficos']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Camara" value="/" to="/" component={NavLink} />
      <Tab label="Graficos" value="/graficos" to="/graficos" component={NavLink} />
    </Tabs>
  );
}

export default MainApp;