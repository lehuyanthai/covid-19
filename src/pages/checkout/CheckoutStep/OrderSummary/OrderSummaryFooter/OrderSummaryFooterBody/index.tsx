import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../app/store';
import { SHIPPING_FEE, TEX_FEE } from '../../../../../../constant';

import './styles.scss';

const OrderSummaryFooterBody = () => {
    const orderTotal = useSelector((state:RootState) => state.cart.total)
  const renderedLabel = ['Sub total', 'Tex', 'Shipping'].map((item) => (
    <div key={item} className='order-summary-footer-body__side--item'>
      {item}
    </div>
  ));
  const renderedFee = [orderTotal,TEX_FEE, SHIPPING_FEE].map((item) => (
    <div key={item} className='order-summary-footer-body__side--item'>
      ${item.toFixed(2)}
    </div>
  ));

  return (
    <div className='order-summary-footer-body'>
        <div className='order-summary-footer-body__side'>{renderedLabel}</div>
        <div className='order-summary-footer-body__side'>{renderedFee}</div>
    </div>
  );
};

export default OrderSummaryFooterBody;
