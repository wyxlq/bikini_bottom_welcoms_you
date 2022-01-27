import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Button, Table } from 'antd';
import TrafficLight from '@/components/TrafficLight/TrafficLight';
import characters from '@/mock/characters';
import locations from '@/mock/locations';
import users from '@/mock/users';

import { BaseCharacter, BaseUser } from '@/types/index.d';

import styles from './Location.module.scss';

interface CharacterDic {
  [code: string]: BaseCharacter;
}
interface UserDic {
  [id: number]: BaseUser;
}
let characterDic: CharacterDic = {};
characters.forEach(character => {
  characterDic[character.code] = character;
});
let userDic: UserDic = {};
users.forEach(user => {
  userDic[user.id] = user;
});
const Location = () => {
  const navigate = useNavigate();
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [tableScrollY, setTableScrollY] = useState<number>();
  useEffect(() => {
    const tableContainerClientHeight: number =
      tableContainerRef.current?.clientHeight || 0;
    setTableScrollY(tableContainerClientHeight - 16 - 32 - 55);
  }, [tableContainerRef]);
  return (
    <div className={styles['Location']}>
      <div className={styles['operate-container']}>
        <div className={styles['breadcrumb-container']}>
          <Breadcrumb className={styles['breadcrumb']}>
            <Breadcrumb.Item>比奇堡</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles['button-container']}>
          <Button className={styles['button" type="primary']}>新增地点</Button>
        </div>
      </div>
      <div className={styles['table-container']} ref={tableContainerRef}>
        <Table
          className={styles['table']}
          scroll={{
            y: tableScrollY,
          }}
          dataSource={locations}
          columns={[
            {
              dataIndex: 'name',
              key: 'name',
              width: 100,
              title: '名称',
            },
            {
              dataIndex: 'isInUse',
              key: 'isInUse',
              width: 300,
              align: 'center',
              title: '使用中',
              render: (text: any, record: any) => (
                <div className={styles['traffic-light-container']}>
                  <TrafficLight color={record.isInUse ? 'red' : 'green'} />
                </div>
              ),
            },
            {
              dataIndex: 'user',
              key: 'user',
              width: 100,
              title: '使用者',
              render: (text: any, record: any) => {
                const characterNames = record.userIds.map(
                  (userId: number) =>
                    characterDic[userDic[userId].characterCode].name
                );
                return <>{characterNames.join('、') || '-'}</>;
              },
            },
            {
              dataIndex: 'operate',
              key: 'operate',
              width: 200,
              align: 'center',
              title: '操作',
              render: (text: any, record: any) =>
                !record.isInUse && (
                  <div className={styles['button-container']}>
                    <Button
                      className={styles['button button-enter']}
                      type="link"
                      onClick={() => {
                        navigate(`/app/location/detail/${record.code}`);
                      }}
                    >
                      进入
                    </Button>
                  </div>
                ),
            },
          ]}
          pagination={{
            pageSize: 10,
            showQuickJumper: true,
            showSizeChanger: true,
            showTotal: total => (
              <div className={styles['total']}>共 {total} 个地点</div>
            ),
            total: 11,
          }}
        />
      </div>
    </div>
  );
};

export default Location;
