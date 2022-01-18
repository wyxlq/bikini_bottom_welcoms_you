import React from 'react';
import SpongeBobSquarePantsSource from '@/assets/images/SpongeBobSquarePants.jpg';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="background">
        <img src={SpongeBobSquarePantsSource} alt="SpongeBobSquarePants" />
      </div>
    </div>
  );
};

export default Login;
