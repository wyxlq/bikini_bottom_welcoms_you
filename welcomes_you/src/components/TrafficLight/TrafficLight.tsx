import react from 'react';
import classnames from 'classnames';

import { TrafficLightProps } from '@/types/index.d';

import './TrafficLight.scss';

const TrafficLight = (props: TrafficLightProps) => {
  const { color } = props;
  return (
    <div className="TrafficLight">
      <div className={classnames(['light', color])} />
    </div>
  );
};

export default TrafficLight;
