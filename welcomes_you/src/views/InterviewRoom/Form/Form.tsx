import react from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import styles from './Form.module.scss';

const InterviewRoomForm = () => {
  const navigate = useNavigate();
  const submitHandler = async (e: any) => {
    const resp = await fetch('/api/createInterview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e),
    });
    const res = await resp.json();
    navigate(`/interview-room/detail?id=${res.data}`);
  };
  return (
    <div className={styles.InterviewRoomForm}>
      <div className={styles.left}>
        <div className={styles.background}></div>
      </div>
      <div className={styles.right}>
        <div className={styles.formContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>比奇堡</div>
            <div className={styles.description}>一个轻量的在线笔试系统</div>
          </div>
          <Form
            className={styles.form}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={submitHandler}
          >
            <Form.Item label="面试者姓名" name="intervieweeName">
              <Input placeholder="请输入面试者姓名" />
            </Form.Item>
            <Form.Item
              label="面试者邮箱地址"
              name="intervieweeEmail"
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
              label="面试官邮箱地址"
              name="interviewerEmail"
              rules={[
                {
                  required: true,
                  message: '请输入面试官邮箱地址',
                },
              ]}
            >
              <Input placeholder="请输入面试官邮箱地址" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className={styles.submitButton}
                htmlType="submit"
                type="primary"
              >
                生成面试链接并发送到面试者邮箱
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InterviewRoomForm;
