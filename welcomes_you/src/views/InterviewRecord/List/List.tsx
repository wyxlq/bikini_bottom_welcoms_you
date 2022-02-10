import React, { useEffect, useRef, useState } from 'react';
import { Button, Drawer, Table } from 'antd';
import * as monaco from 'monaco-editor';
import dayjs from 'dayjs';

import styles from './List.module.scss';

const InterviewRecordList = () => {
  const [interviews, setInterviews] = useState([]);
  const [activeInterviewValue, setActiveInterviewValue] = useState('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const tableRoot = useRef<HTMLDivElement>(null);
  const [tableHeight, setTableHeight] = useState(0);
  const editorRoot = useRef<HTMLDivElement>(null);
  const edtorInstance = useRef<monaco.editor.ITextModel | null>(null);
  const columns = [
    {
      title: '面试者姓名',
      dataIndex: 'intervieweeName',
      key: 'intervieweeName',
    },
    {
      title: '面试者邮箱',
      dataIndex: 'intervieweeEmail',
      key: 'intervieweeEmail',
    },
    {
      title: '面试官姓名',
      dataIndex: 'interviewerName',
      key: 'interviewerName',
    },
    {
      title: '面试官邮箱',
      dataIndex: 'interviewerEmail',
      key: 'interviewerEmail',
    },
    {
      title: '笔试创建时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
      render: (text: any, record: any) => (
        <>{dayjs(record.createdTime).format('YYYY-MM-DD HH:mm:ss')}</>
      ),
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      width: 200,
      render: (text: any, record: any) => (
        <Button
          type="primary"
          onClick={() => {
            setActiveInterviewValue(record.value);
            setDrawerVisible(true);
          }}
        >
          查看
        </Button>
      ),
    },
  ];
  useEffect(() => {
    const readInterviews = async () => {
      const resp = await fetch('/api/readInterviews', {
        method: 'GET',
      });
      const res = await resp.json();
      setInterviews(res.data);
    };
    readInterviews();
  }, []);
  useEffect(() => {
    if (tableRoot.current) {
      setTableHeight(tableRoot.current.clientHeight);
    }
  }, []);
  useEffect(() => {
    if (editorRoot.current) {
      const core = monaco.editor.create(editorRoot.current, {
        value: '',
        language: 'javascript',
      });
      edtorInstance.current = core?.getModel?.();
    }
    const instance = edtorInstance.current;
    return () => {
      if (instance) {
        instance.dispose();
      }
    };
  }, []);
  useEffect(() => {
    if (edtorInstance.current) {
      edtorInstance.current.setValue(activeInterviewValue);
    }
  }, [activeInterviewValue]);
  return (
    <div className={styles['InterviewRecordList']}>
      <div className={styles.backgroundContainer}>
        <div className={styles.background}></div>
        <div className={styles.bottom}></div>
      </div>
      <div className={styles.main}>
        <div className={styles.tableContainer}>
          <Table
            ref={tableRoot}
            className={styles.table}
            columns={columns}
            dataSource={interviews}
            pagination={{
              pageSize: 20,
            }}
            scroll={{
              y: tableHeight - 32 - 16 - 55,
            }}
          />
        </div>
      </div>
      <Drawer
        placement="right"
        visible={drawerVisible}
        width={720}
        onClose={() => {
          setDrawerVisible(false);
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <div
            ref={editorRoot}
            style={{
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              border: '1px solid rgba(0, 0, 0, 0.15)',
            }}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default InterviewRecordList;
