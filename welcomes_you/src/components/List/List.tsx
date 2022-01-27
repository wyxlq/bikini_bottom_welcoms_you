import react from 'react';
import { Breadcrumb, Button, Table } from 'antd';

import styles from './List.module.scss';

interface ListProps {}
const List = (props: ListProps) => {
  return (
    <div className={styles['List']}>
      <div className={styles['toolbar']}>
        <div className={styles['breadcrumb']}></div>
        <div className={styles['operate']}></div>
      </div>
      <div className={styles['table']}></div>
    </div>
  );
};

export default List;
