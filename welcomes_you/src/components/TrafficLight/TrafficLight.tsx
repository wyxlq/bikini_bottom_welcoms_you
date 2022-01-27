import react from 'react';
import classnames from 'classnames';

import { TrafficLightProps } from '@/types/index.d';

import styles from './TrafficLight.module.scss';

const TrafficLight = (props: TrafficLightProps) => {
  const { color } = props;
  return (
    <div className={styles['TrafficLight']}>
      <div className={classnames(['light', color])} />
    </div>
  );
};

export default TrafficLight;
