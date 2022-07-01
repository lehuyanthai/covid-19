import clsx from 'clsx';
import React from 'react';

import './styles.scss';

interface INewPrice {
  price: number;
  bigSize?: boolean;
}

const NewPrice = ({ price, bigSize = false }: INewPrice) => {
  return (
    <span
      className={clsx({ 'new-price': true, big: bigSize })}
    >${price.toFixed(2)}</span>
  );
};

export default NewPrice;
