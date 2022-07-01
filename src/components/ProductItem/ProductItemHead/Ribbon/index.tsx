import React from 'react';
import './styles.scss'

interface IRibbon {
  discount: number;
}

const Ribbon = ({ discount }: IRibbon) => {
  return <div className='ribbon'>{`${discount}% OFF`}</div>;
};

export default Ribbon;
