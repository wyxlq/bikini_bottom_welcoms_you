import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import LockOutlined from '@ant-design/icons/LockOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import SpongeBobSquarePantsSource from '@/assets/images/SpongeBobSquarePants.jpg';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="photo-frame">
        <img
          className="photo"
          src={SpongeBobSquarePantsSource}
          alt="SpongeBobSquarePants"
        />
      </div>
      <div className="form-container">
        <div className="doorplate">
          <div className="text">BIKINI BOTTOM</div>
          <div className="text">WELECOMES YOU</div>
        </div>
        <div className="form-wrap">
          <Form className="form">
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input placeholder="Username" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Password"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item noStyle>
              <Button className="button-login" type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
