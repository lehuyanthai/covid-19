import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../app/store';
import { closeCart } from '../../../slice/cartSlice';
import Button from '../../Button';
import CartContent from './CartContent';
import CartFooter from './CartFooter';
import CartHead from './CartHead';

import './styles.scss';

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartIsOpen = useSelector((state: RootState) => state.cart.isOpen);
  const cartListItem = useSelector((state:RootState) =>state.cart.products);

  const navigate = useNavigate()

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  const handleCheckout = () => {
    navigate('/checkout')
    dispatch(closeCart());
  }

  return (
    <>
      <div
        className={clsx({ 'cart-wrapper': true, active: cartIsOpen })}
        onClick={handleCloseCart}
      ></div>
      <div className={clsx({ cart: true, active: cartIsOpen })}>
        <CartHead onClose={handleCloseCart}/>
        <CartContent products={cartListItem}/>
        <CartFooter />
        <Button children="Checkout" onClick={handleCheckout} extraClass='cart__checkout'/>
      </div>
    </>
  );
};

export default Cart;
