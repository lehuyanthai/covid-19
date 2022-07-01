import clsx from 'clsx';
import React from 'react';

import './styles.scss';

interface IOldPrice {
  oldPrice: number;
  bigSize?: boolean;
}

const OldPrice = ({ oldPrice, bigSize = false }: IOldPrice) => {
  return (
    <div
      className={clsx({ 'old-price': true, 'old-price-big': bigSize })}
    >{`$${oldPrice}.00 `}</div>
  );
};

export default OldPrice;
