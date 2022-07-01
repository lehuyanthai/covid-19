import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../app/store';
import { CartIcon } from '../../../icons';
import { openCart } from '../../../slice/cartSlice';

import './styles.scss';

const CartButton = () => {
  const dispatch = useAppDispatch();
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.quantity
  );

  const handleClick = () =>{
    dispatch(openCart())
  }
  return (
    <div className='header__item--cart' onClick={handleClick}>
      <CartIcon />
      {!!cartQuantity && <span className='badge'>{cartQuantity}</span>}
    </div>
  );
};

export default CartButton;
