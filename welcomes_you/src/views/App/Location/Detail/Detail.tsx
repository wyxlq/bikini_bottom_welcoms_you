import react from 'react';
import { useParams } from 'react-router-dom';
import {
  LeftMessageCard,
  RightMessageCard,
} from '@/components/MessageCard/MessageCard';

import styles from './Detail.module.scss';

const Detail = () => {
  const { locationCode } = useParams();
  return (
    <div className={styles['Detail']}>
      <div className={styles['question-container']}></div>
      <div className={styles['videoCall-container']}>
        <div className={styles['videoCall-wrap']}>
          <div className={styles['videoCall']}></div>
        </div>
        <div className={styles['message-container']}>
          <div className={styles['message-card-container']}>
            <LeftMessageCard />
          </div>
          <div className={styles['message-card-container']}>
            <LeftMessageCard />
          </div>
          <div className={styles['message-card-container']}>
            <RightMessageCard />
          </div>
          <div className={styles['message-card-container']}>
            <RightMessageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
