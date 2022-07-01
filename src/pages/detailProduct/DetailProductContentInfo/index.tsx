import React, { SetStateAction } from 'react';
import Price from '../../../components/Price';
import ProductAction from './ProductAction';
import ProductListColor from './ProductListColor';
import ProductName from './ProductName';
import ProductRating from './ProductRating';
import ProductShare from './ProductShare';

import './styles.scss'

interface IDetailProductContentInfo {
  name: string;
  rating: number;
  customerReview: number;
  price: number;
  description: string;
  addToCart: () => void;
  colors:string[];
  selectedColor: string;
  setSelectedColor: React.Dispatch<SetStateAction<string>>;
  amount: number;
  setAmount: React.Dispatch<SetStateAction<number>>;
}

const DetailProductContentInfo = ({
  name,
  rating,
  customerReview,
  price,
  description,
  addToCart,
  colors,
  selectedColor,
  setAmount,
  setSelectedColor,
  amount,
}: IDetailProductContentInfo) => {
  return (
    <div className='detail-product-content__info'>
      <ProductName name={name} />
      <ProductRating rating={rating} customerReview={customerReview}/>
      <Price
        newPrice={price}
        oldPrice={price}
        bigSize
      />
      <div className='detail-product-content__info--shortDescription'>
        {description.slice(0, 150)}
      </div>
      <ProductListColor disable={false} colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <ProductAction addToCart={addToCart} amount={amount} setAmount={setAmount}/>
       <ProductShare />
    </div>
  );
};

export default DetailProductContentInfo;
