import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import LockOutlined from '@ant-design/icons/LockOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import SpongeBobSquarePantsSource from '@/assets/images/SpongeBobSquarePants.jpg';
import './Login.scss';

const Login = () => {
  return (
    <div className="Login">
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
              name="account"
              rules={[
                {
                  required: true,
                  message: '请输入账号！',
                },
              ]}
            >
              <Input placeholder="请输入账号" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            >
              <Input
                type="password"
                placeholder="请输入密码"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item noStyle>
              <Button
                className="button button-login"
                type="primary"
                htmlType="submit"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
