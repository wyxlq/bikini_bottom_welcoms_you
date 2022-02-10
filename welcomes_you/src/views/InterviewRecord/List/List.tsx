import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'antd';

import styles from './List.module.scss';

const InterviewRecordList = () => {
  const navigate = useNavigate();
  const [interviews, setInterviews] = useState([]);
  const tableRoot = useRef<HTMLDivElement>(null);
  const [tableHeight, setTableHeight] = useState(0);
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
            navigate(`/interview-room/detail/${record.id}`);
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
            dataSource={interviews
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)
              .concat(interviews)}
            pagination={{
              pageSize: 20,
            }}
            scroll={{
              y: tableHeight - 32 - 16 - 55,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InterviewRecordList;
