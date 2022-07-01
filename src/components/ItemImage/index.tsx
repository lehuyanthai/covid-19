import React from 'react';

import './styles.scss'

interface IItemImage {
  image: string;
}

const ItemImage = ({image}:IItemImage) => {
  return (
    <div className='cart-item__image'>
      <img src={image} alt='' />
    </div>
  );
};

export default ItemImage;
