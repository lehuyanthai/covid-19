import React from 'react';
import { Rating } from 'react-simple-star-rating';

import './styles.scss';

interface IProductRating {
  rating: number;
  customerReview: number;
}

const ProductRating = ({ rating, customerReview }: IProductRating) => {
  return (
    <div className='product-rating'>
      <Rating
        ratingValue={(rating / 5) * 100}
        readonly
        size={24}
        fillColor='#FF6D33'
      />
      <div className='product-rating__amount'>{customerReview} Customer review</div>
    </div>
  );
};

export default ProductRating;
