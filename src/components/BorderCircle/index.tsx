import clsx from 'clsx';
import React, { SetStateAction } from 'react';
import './styles.scss';

interface IBorderCircle {
    itemIndex:number,
    active:boolean,
    setItemActive: React.Dispatch<SetStateAction<number>>
}

const BorderCircle = ({itemIndex,active,setItemActive}:IBorderCircle) => {
  return (
    <div
      className={clsx({
        'circle': true,
        'circle-active': active,
      })}
      onClick={() => setItemActive(itemIndex)}
    />
  );
};

export default BorderCircle;
