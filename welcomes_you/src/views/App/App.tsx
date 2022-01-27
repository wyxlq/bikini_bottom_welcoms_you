import React from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Menu } from 'antd';
import routes from '@/router/appRoutes';

import { MenuClickEventHandler } from 'antd/node_modules/rc-menu/lib/interface.d';
import { BaseRoutes } from '@/types/index.d';

import styles from './App.module.scss';

const menus = [
  {
    path: '/app/interview-room/list',
    title: '面试间',
  },
  {
    path: '/app/archive/list',
    title: '档案',
  },
  {
    path: '/app/question/oral-examination/list',
    title: '口试题',
  },
  {
    path: '/app/question/written-examination/list',
    title: '笔试题',
  },
];
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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const menuClickEventHandler: MenuClickEventHandler = ({ keyPath }) => {
    navigate(keyPath[0]);
  };
  return (
    <div className={styles['App']}>
      <div className={styles['menu-container']}>
        <div className={styles['logo']}>
          <div className={styles['text']}>BIKINI BOTTOM</div>
          <div className={styles['text']}>WELECOMES YOU</div>
        </div>
        <div className={styles['menu-wrap']}>
          <Menu
            className={styles['menu']}
            defaultOpenKeys={['/app/question']}
            defaultSelectedKeys={[pathname]}
            mode="inline"
            theme="dark"
            onClick={menuClickEventHandler}
          >
            {menus.map(menu => (
              <Menu.Item key={menu.path}>{menu.title}</Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
      <div className={styles['container']}>
        <div className={styles['navigation']}>
          <div className={styles['slogan']}>
            <div className={styles['text']}>比奇堡欢迎你</div>
          </div>
          <div className={styles['user']}>
            <div className={styles['avatar-container']}>
              <img
                className={styles['avatar']}
                src="//img2.baidu.com/it/u=4205517773,2939419564&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt="avatar"
              />
            </div>
            <div className={styles['name']}>派大星</div>
          </div>
        </div>
        <div className={styles['content']}>
          <Routes>{rRoute(routes)}</Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
