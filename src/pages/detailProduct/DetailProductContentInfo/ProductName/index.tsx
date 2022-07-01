import React from 'react';

import './styles.scss'

interface IProductName {
  name: string;
}

const ProductName = ({ name }: IProductName) => {
  return (
    <div className='product-name'>{name}</div>
  );
};

export default ProductName;
