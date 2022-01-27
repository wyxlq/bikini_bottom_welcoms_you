import react from 'react';

import styles from './MessageCard.module.scss';

export const BubbleDialog = () => {
  <div className="BubbleDialog"></div>;
};
export const LeftMessageCard = () => {
  return (
    <div className={styles['MessageCard']}>
      <div className={styles['avatar-container']}></div>
      <div className={styles['message-container']}>
        <div className={styles['name']}>海绵宝宝</div>
        <div>啦啦啦啦啦，你在干什么呀</div>
      </div>
    </div>
  );
};
export const RightMessageCard = () => {
  return <div className={styles['MessageCard']}></div>;
};
