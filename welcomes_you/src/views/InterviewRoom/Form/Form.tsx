import react from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './Form.module.scss';

const InterviewRoomForm = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.InterviewRoomForm}>
      <div className={styles.formContainer}>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          onFinish={async e => {
            console.log('e', e);
            const resp = await fetch('/api/createInterview', {
              method: 'POST',
              body: e,
            });
            const val = await resp.json();
            navigate(`/interview-room/detail?id=${val.result}`);
          }}
        >
          <Form.Item label="姓名" name="interviewee">
            <Input placeholder="请输入面试者姓名" />
          </Form.Item>
          <Form.Item label="手机号码">
            <Input placeholder="请输入面试者手机号码" />
          </Form.Item>
          <Form.Item
            label="邮箱地址"
            name="email"
            rules={[
              {
                required: true,
                message: '请输入面试者邮箱地址',
              },
            ]}
          >
            <Input placeholder="请输入面试者邮箱地址" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 18,
            }}
          >
            <Button htmlType="submit" type="primary">
              生成面试链接并发送到面试者邮箱
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default InterviewRoomForm;
