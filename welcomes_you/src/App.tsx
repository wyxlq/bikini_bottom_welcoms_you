import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@/router/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        {routes?.map((route, index) => {
          const Component = route.Component;
          return (
            <Route key={index} path={route.path} element={<Component />} />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
