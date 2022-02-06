import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import routes from '@/router/index';

import { BaseRoutes } from '@/types/index.d';

import './App.css';

const Layout = (props: any) => {
  return (
    <React.Fragment {...props}>
      <Outlet />
    </React.Fragment>
  );
};

const rRoute = (routes: BaseRoutes) =>
  routes.map((route, index) => {
    const Component = route.Component || Layout;
    return (
      <Route key={index} path={route.path} element={<Component />}>
        {Array.isArray(route.routes) && rRoute(route.routes)}
      </Route>
    );
  });

const App = () => {
  return (
    <div className="App">
      <Routes>{rRoute(routes)}</Routes>
    </div>
  );
};
export default App;
