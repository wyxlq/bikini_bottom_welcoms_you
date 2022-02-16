import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';

import styles from './Form.module.scss';

const InterviewRoomForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitHandler = async (e: any) => {
    setIsSubmitting(true);
    const resp = await fetch('/api/createInterview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e),
    });
    const res = await resp.json();
    if (!res.success) {
      message.error(res.message);
    }
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(`/interview-record/detail?id=${res.data}`);
    }, 2000);
  };
  return (
    <div className={styles.InterviewRoomForm}>
      <div className={styles.backgroundContainer}>
        <div className={styles.background}></div>
        <div className={styles.bottom}></div>
      </div>
      <div className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Bikini Bottom</div>
          <div className={styles.description}>
            一个<span className={styles.em}> 轻量级 </span>的
            <span className={styles.em}> 实时共享 </span>笔试系统
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              填写完表单后，点击『生成笔试链接并发送到邮箱』按钮，会创建一个临时的笔试链接，分别发送到面试者和面试官邮箱中，双方可以通过此链接访问实时共享的编辑器进行笔试。
            </div>
            <div className={styles.description}>
              面试者笔试结束后，点击『提交』按钮，会将笔试记录分别发送到面试者和面试官邮箱中。
            </div>
          </div>
          <Form
            className={styles.form}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            onFinish={submitHandler}
          >
            <Form.Item label="面试者姓名" name="intervieweeName">
              <Input placeholder="选填，填写后会在邮件中使用" />
            </Form.Item>
            <Form.Item
              label="面试者邮箱"
              name="intervieweeEmail"
              rules={[
                {
                  required: true,
                  message: '请输入面试者邮箱',
                },
              ]}
            >
              <Input placeholder="必填，填写后会发送笔试链接到此邮箱" type="email" />
            </Form.Item>
            <Form.Item label="面试官姓名" name="interviewerName">
              <Input placeholder="选填，填写后会在邮件中使用" />
            </Form.Item>
            <Form.Item
              label="面试官邮箱"
              name="interviewerEmail"
              rules={[
                {
                  required: true,
                  message: '请输入面试官邮箱',
                },
              ]}
            >
              <Input placeholder="必填，填写后会发送笔试链接到此邮箱" type="email" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 18,
              }}
            >
              <div className={styles.buttonContainer}>
                <Button
                  onClick={() => {
                    navigate('/interview-record/list');
                  }}
                >
                  查看笔试记录
                </Button>
                <Button
                  className={styles.submitButton}
                  htmlType="submit"
                  loading={isSubmitting}
                  type="primary"
                >
                  <div className={styles.text}>生成笔试链接并发送到邮箱</div>
                  <ArrowRightOutlined className={styles.icon} />
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InterviewRoomForm;
