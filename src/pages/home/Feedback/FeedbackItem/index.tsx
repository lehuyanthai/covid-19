import React from 'react';
import Avatar from '../../../../components/Avatar';

import './styles.scss';

interface IFeedbackItem {
  name: string;
  comment: string;
  avatar: string;
}

const FeedbackItem = ({avatar,comment,name}:IFeedbackItem) => {
  return <div className='feedback-item'>
    <Avatar image={avatar} size={110}/>
    <div className='feedback-item__comment'>{comment}</div>
    <div className='feedback-item__name'>{name}</div>
  </div>;
};

export default FeedbackItem;
