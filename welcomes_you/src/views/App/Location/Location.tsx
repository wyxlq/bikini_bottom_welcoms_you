import React from 'react';
import { Table } from 'antd';
import classnames from 'classnames';

import './Location.scss';

const dataSource = [
  {
    key: 1,
    code: 'Pineapple_House',
    name: '菠萝屋',
    isInUse: true,
    user: ['小蜗'],
  },
  {
    key: 2,
    code: 'Rock_House',
    name: '石头屋',
    isInUse: true,
    user: ['派大星'],
  },
  {
    key: 3,
    code: 'Easter_Island_Head_House',
    name: '复活岛人像屋',
    isInUse: false,
  },
  {
    key: 4,
    code: 'Treedome',
    name: '圆顶树屋',
    isInUse: true,
    user: ['珊迪'],
  },
  {
    key: 5,
    code: 'Anchor_house',
    name: '船锚屋',
    isInUse: true,
    user: ['珍珍'],
  },
  {
    key: 6,
    code: 'Krusty_Krab',
    name: '蟹堡王餐厅',
    isInUse: true,
    user: ['蟹老板', '海绵宝宝', '章鱼哥'],
  },
  {
    key: 7,
    code: 'Chum_Bucket',
    name: '海之霸餐厅',
    isInUse: true,
    user: ['痞老板', '凯伦'],
  },
  {
    key: 8,
    code: "Mrs. Puff's Boating School",
    name: '泡芙老师的海底驾驶训练班',
    isInUse: true,
    user: ['泡芙老师'],
  },
  {
    key: 9,
    code: 'Shady_Shoals_Rest_Home',
    name: '沙沙礁岩安养中心',
    isInUse: true,
    user: ['海超人', '大洋游侠'],
  },
  {
    key: 10,
    code: 'Jellyfish_Fields',
    name: '水母田',
    isInUse: false,
  },
  {
    key: 11,
    code: 'Goo_Lagoon',
    name: '酷乐湖',
    isInUse: true,
    user: ['虾霸'],
  },
];
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'Name',
  },
  {
    dataIndex: 'isInUse',
    key: 'isInUse',
    title: '正在使用中',
    render: (text: any, record: any) => (
      <TrafficLight color={record.isInUse ? 'red' : 'green'} />
    ),
  },
  {
    dataIndex: 'user',
    key: 'user',
    title: '使用者',
    render: (text: any, record: any) => (
      <div>{record.user?.join('、') || '-'}</div>
    ),
  },
  {
    dataIndex: 'operate',
    key: 'operate',
    title: '操作',
    render: (text: any, record: any) => {
      return !record.isInUse && <div className="button-enter">进入</div>;
    },
  },
];
const TrafficLight = ({ color }: { color: 'red' | 'green' }) => (
  <div className={classnames(['TrafficLight', color])} />
);
const Location = () => {
  return (
    <div className="Location">
      <div className="table-container">
        <Table
          className="table"
          dataSource={dataSource}
          columns={columns}
          pagination={{
            pageSize: 20,
          }}
        />
      </div>
    </div>
  );
};

export default Location;
