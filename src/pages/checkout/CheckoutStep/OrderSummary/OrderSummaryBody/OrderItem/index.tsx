import React from 'react';
import IconButton from '../../../../../../components/IconButton';
import ItemImage from '../../../../../../components/ItemImage';
import NewPrice from '../../../../../../components/Price/NewPrice';
import { BinIcon } from '../../../../../../icons';

import './styles.scss'

interface IOrderItem {
  image: string;
  name: string;
  price: number;
}

const OrderItem = ({ image, name, price }: IOrderItem) => {
  return (
    <div className='order-item has-bottom-border'>
      <ItemImage image={image} />
      <div className='order-item__right-side'>
        <div className='order-item__right-side--info'>
          <div className='name'>{name}</div>
          <span>Amount: </span>
          <NewPrice price={price} />
        </div>
        <IconButton icon={<BinIcon/>} onClick={()=>{}} transparent/>
      </div>
    </div>
  );
};

export default OrderItem;
