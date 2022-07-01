import { ReactNode } from 'react';
import Button from '../../Button';
import Ribbon from './Ribbon';

import './styles.scss';

interface IProductItemHead {
  id: string;
  image: string;
  discount: number;
  firstButton: ReactNode;
  secondButton: ReactNode;
  addToCart:() =>void
}

const ProductItemHead = ({
  id,
  image,
  discount,
  firstButton,
  secondButton,
  addToCart
}: IProductItemHead) => {
  return (
    <div className='product-item__head'>
      <Ribbon discount={discount} />
      <img src={image} alt='' />
      <div className='hover'>
        <div className='group-button'>
          <Button
            extraClass='addToCartBtn'
            children='Add to Cart'
            onClick={addToCart}
          />
          <div className='inner-group-button'>
            {firstButton}
            {secondButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemHead;
