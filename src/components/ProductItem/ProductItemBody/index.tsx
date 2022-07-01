import { Rating } from 'react-simple-star-rating';
import Price from '../../Price';

import './styles.scss';

interface IProductItemBody {
  name: string;
  oldPrice: number;
  newPrice: number;
  rating: number;
}

const ProductItemBody = ({
  name,
  oldPrice,
  newPrice,
  rating,
}: IProductItemBody) => {
  return (
    <div className='product-item__body'>
      <div className='product-item__body--name'>{name}</div>
      <div className='product-item__body--description'>
        <Price oldPrice={oldPrice} newPrice={newPrice} />
        <Rating
          ratingValue={rating * 20}
          fillColor='#FF6D33'
          size={24}
          readonly={true}
        />
      </div>
    </div>
  );
};

export default ProductItemBody;
