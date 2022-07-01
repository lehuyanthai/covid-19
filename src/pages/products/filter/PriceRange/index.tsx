import clsx from 'clsx';
import React, { FormEvent } from 'react';
import { TParameterNameOfFilterOpts, TTypes } from '../..';

import './styles.scss';

export interface IPriceRange {
  disable: boolean;
  priceRange: number;
  setPriceRange: (
    type: TParameterNameOfFilterOpts,
    value: TTypes
  ) => void;
}

const PriceRange = ({ disable, priceRange, setPriceRange }: IPriceRange) => {
  const handlePriceRange = (e: FormEvent<HTMLInputElement>) => {
    if (!disable) setPriceRange('price', +e.currentTarget.value);
  };

  return (
    <div className='slider-container'>
      <input
        id='priceRange'
        className={clsx({
          "slider-disable":disable,
          "slider":true
        })}
        type='range'
        min='0'
        max='100'
        value={priceRange}
        onChange={handlePriceRange}
        style={{
          background: `linear-gradient(to right, #FF6D33 0%, #FF6D33 ${priceRange}%, #fff ${priceRange}%, white 100%)`,
        }}
      />
    </div>
  );
};

export default PriceRange;
