import react from 'react';
import List from '@/components/List/List';

import styles from './List.module.scss';

const InterviewRoomList = () => {
  return (
    <div className={styles['InterviewRoomListContainer']}>
      <div className={styles['InterviewRoom']}>
        <List />
      </div>
    </div>
  );
};

export default InterviewRoomList;
