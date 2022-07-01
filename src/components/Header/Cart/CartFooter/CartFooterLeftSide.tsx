import React from 'react';

const CartFooterLeftSide = () => {
  const renderedLabel = ['Sub total', 'Tex', 'Shipping', 'Total price'].map(
    (item) => <div key={item} className='cart-footer-side__item'>{item}</div>
  );
  return (
    <div className='cart-footer-side'>
     {renderedLabel}
    </div>
  );
};

export default CartFooterLeftSide;
