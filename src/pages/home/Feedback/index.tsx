import React, { useEffect, useState } from 'react';
import BorderCircle from '../../../components/BorderCircle';
import TitleGroup from '../TitleGroup';
import FeedbackItem from './FeedbackItem';

import './styles.scss';

const FEEDBACK = [
  {
    name: 'Eduard Franz',
    comment: `This is very best product lorem has been the 
        industry's standard dummy text ever since
         to very the 1500s😍`,
    avatar:
      'https://images.immediate.co.uk/production/volatile/sites/3/2022/04/Screenshot-2022-05-10-at-11.13.42-b2ecc46.png?quality=90&webp=true&crop=161px,0px,1777px,1184px&resize=1200,800',
  },
  {
    name: 'Abriella Bond',
    comment: `This is very best product lorem has been the 
        industry's standard dummy text ever since
         to very the 1500s😍`,
    avatar:
      'https://images.immediate.co.uk/production/volatile/sites/3/2022/04/Screenshot-2022-05-10-at-11.13.42-b2ecc46.png?quality=90&webp=true&crop=161px,0px,1777px,1184px&resize=1200,800',
  },
  {
    name: 'Kinslee Fink',
    comment: `This is very best product lorem has been the 
        industry's standard dummy text ever since
         to very the 1500s😍`,
    avatar:
      'https://images.immediate.co.uk/production/volatile/sites/3/2022/04/Screenshot-2022-05-10-at-11.13.42-b2ecc46.png?quality=90&webp=true&crop=161px,0px,1777px,1184px&resize=1200,800',
  },
];

const Feedback = () => {
  const [active, setActive] = useState(1);
  const renderedListFeedback = FEEDBACK.map((item,index) => (
    <FeedbackItem
    key={index}
      avatar={item.avatar}
      comment={item.comment}
      name={item.name}
    />
  ));
  const renderedListButton = [0, 1, 2].map((item) => (
    <BorderCircle
    key={item}
      active={item === active}
      itemIndex={item}
      setItemActive={setActive}
    />
  ));
  useEffect(() => {
    const timer = setInterval(() => {
      if (active === 2) setActive(0);
      else setActive(active + 1);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [active]);

  return (
    <div className='feedback'>
      <TitleGroup title='Protect Your Health' subTitle='Our Beloved Customer' />
      <div className='feedback-list'>
        {renderedListFeedback}
        <div
          className='background'
          style={{ transform: `translate(${-125 + active * 80}%, -50%)` }}
        ></div>
      </div>
      <div className='list-button'>{renderedListButton}</div>
    </div>
  );
};

export default Feedback;
