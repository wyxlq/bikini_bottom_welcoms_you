import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import routes from '@/router/appRoutes';

import { MenuClickEventHandler } from 'antd/node_modules/rc-menu/lib/interface.d';
import { BaseRoutes } from '@/types/index.d';

import './App.scss';

const { SubMenu } = Menu;
const rRoute = (routes: BaseRoutes) =>
  routes.map((route, index) => {
    const Component = route.Component;
    return (
      <Route key={index} path={route.path} element={<Component />}>
        {Array.isArray(route.routes) && rRoute(route.routes)}
      </Route>
    );
  });
const App = () => {
  const navigate = useNavigate();
  const menuClickEventHandler: MenuClickEventHandler = ({ keyPath }) => {
    let i = keyPath.length;
    let path = '/app';
    while (--i >= 0) {
      path += `/${keyPath[i]}`;
    }
    navigate(path);
  };
  return (
    <div className="App">
      <div className="menu-container">
        <div className="doorplate">
          <div className="text">BIKINI BOTTOM</div>
          <div className="text">WELECOMES YOU</div>
        </div>
        <div className="menu-wrap">
          <Menu
            className="menu"
            defaultOpenKeys={['question']}
            mode="inline"
            theme="dark"
            onClick={menuClickEventHandler}
          >
            {routes.map(route =>
              Array.isArray(route.routes) ? (
                <SubMenu key={route.path} title={route.title}>
                  {route.routes.map(route => (
                    <Menu.Item key={route.path}>{route.title}</Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={route.path}>{route.title}</Menu.Item>
              )
            )}
          </Menu>
        </div>
      </div>
      <div className="container">
        <div className="navigation">
          <div className="doorplate">
            <div className="text">比奇堡欢迎你</div>
          </div>
          <div className="character">
            <div className="avatar-container">
              <img className="avatar" src="" />
            </div>
            <div className="name">派大星</div>
          </div>
        </div>
        <div className="content">
          <Routes>{rRoute(routes)}</Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
