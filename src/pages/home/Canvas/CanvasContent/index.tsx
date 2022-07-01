import clsx from 'clsx';
import React from 'react';
import Button from '../../../../components/Button';
import NewPrice from '../../../../components/Price/NewPrice';

import './styles.scss';

interface ICanvasContent {
  bigSizeTitle?: boolean;
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
}

const CanvasContent = ({
  bigSizeTitle = false,
  title,
  description,
  buttonLabel,
  onClick,
}: ICanvasContent) => {
  return (
    <div className='canvas-content'>
      <div className='canvas-content__subTitle'>
        <span className='orange-text'>COVID-19 </span>Be Aware Of Coronavirus
      </div>
      <div
        className={clsx({
          'canvas-content__title': true,
          'big-title': bigSizeTitle,
        })}
      >
        {title}
      </div>
      <div className='canvas-content__description'>{description}</div>
      <div className='canvas-content__button'>
        <Button children={buttonLabel} onClick={onClick} extraClass='canvas-content__button--btn' />
        {!bigSizeTitle && <div className='canvas-content__button--extra-info'>
             Only for <NewPrice price={200}/>
        </div>}
      </div>
    </div>
  );
};

export default CanvasContent;
