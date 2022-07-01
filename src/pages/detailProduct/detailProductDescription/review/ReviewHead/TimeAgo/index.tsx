import moment from 'moment';
import React from 'react';
import { ClockIcon } from '../../../../../../icons';

import './styles.scss'

interface ITimeAgo {
  createdAt: Date;
}

const TimeAgo = ({ createdAt }: ITimeAgo) => {
  return (
    <div className='time-ago'>
      <ClockIcon />
      <div>{moment(createdAt).fromNow()}</div>
    </div>
  );
};

export default TimeAgo;
