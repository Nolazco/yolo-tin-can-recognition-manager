import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Outlet, matchPath, useLocation, NavLink } from 'react-router-dom';
import TinmanLogo from './TinmanLogo.jsx';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

function MainApp() {
  return (
    <>
      <div style={{ marginTop: '64px' }}>
        <MyTabs />
        <div style={{ padding: '16px' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
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
  const routeMatch = useRouteMatch(['/', '/graficos']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <AppBar position="fixed">
      <Tabs
        sx={{
          backgroundImage: 'linear-gradient(to bottom, #2A2831, #334144)',
          color: '#FFFFFF',
        }}
        value={currentTab}
        TabIndicatorProps={{
          style: { backgroundColor: '#FFFFFF' },
        }}
      >
        <Tab
          label={<TinmanLogo />}
          disabled
          sx={{ pointerEvents: 'none' }}
        />
        <Tab
          label="Graficos"
          value="/graficos"
          to="/graficos"
          component={NavLink}
          icon={<LeaderboardIcon />}
          sx={{
            color: currentTab === '/graficos' ? '#FFFFFF' : '#888888',
            '&.Mui-selected': { color: '#FFFFFF' },
          }}
        />
        <Tab
          label="Camara"
          value="/"
          to="/"
          component={NavLink}
          icon={currentTab === '/' ? <VisibilityIcon /> : <VisibilityOffIcon />}
          sx={{
            color: currentTab === '/' ? '#FFFFFF' : '#888888',
            '&.Mui-selected': { color: '#FFFFFF' },
          }}
        />
      </Tabs>
    </AppBar>
  );
}

export default MainApp;