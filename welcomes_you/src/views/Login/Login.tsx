import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import LockOutlined from '@ant-design/icons/LockOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import SpongeBobSquarePantsSource from '@/assets/images/SpongeBobSquarePants.jpg';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles['Login']}>
      <div className={styles['photo-frame']}>
        <img
          className={styles['photo']}
          src={SpongeBobSquarePantsSource}
          alt="SpongeBobSquarePants"
        />
      </div>
      <div className={styles['form-container']}>
        <div className={styles['doorplate']}>
          <div className={styles['text']}>BIKINI BOTTOM</div>
          <div className={styles['text']}>WELECOMES YOU</div>
        </div>
        <div className={styles['form-wrap']}>
          <Form className={styles['form']}>
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
                className={styles['button button-login']}
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
