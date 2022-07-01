import React from 'react';
import NewPrice from './NewPrice';
import OldPrice from './OldPrice';

import './styles.scss';

interface IPrice {
  oldPrice: number;
  newPrice: number;
  bigSize?: boolean;
}

const Price = ({ oldPrice, newPrice, bigSize }: IPrice) => {
  return (
    <div className='price-group'>
      <NewPrice price={newPrice} bigSize={bigSize} />
      <OldPrice oldPrice={oldPrice} bigSize={bigSize} />
    </div>
  );
};

export default Price;
