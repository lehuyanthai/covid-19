import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { SHIPPING_FEE, TEX_FEE } from '../../../../constant';
import NewPrice from '../../../Price/NewPrice';

const CartFooterRightSide = () => {
  const subtotal = useSelector((state: RootState) => state.cart.total);
  const total = useMemo(()=>subtotal + TEX_FEE + SHIPPING_FEE,[subtotal]);
  return (
    <div className='cart-footer-side'>
      <div className='cart-footer-side__item'>$ {subtotal}</div>
      <div className='cart-footer-side__item'>$ {TEX_FEE}</div>
      <div className='cart-footer-side__item'>$ {SHIPPING_FEE}</div>
      <NewPrice price={total} />
    </div>
  );
};

export default CartFooterRightSide;
