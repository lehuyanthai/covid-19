import { ICartProduct } from '../../../../../slice/cartSlice';
import CartItemRightSide from './CartItemRightSide';
import ItemImage from '../../../../ItemImage';

import './styles.scss';

interface ICartItem {
  cartProductData: ICartProduct;
}

const CartItem = ({ cartProductData }: ICartItem) => {
  const { id,name, price, image, quantity } = cartProductData;
  return (
    <div className='cart-item'>
      <ItemImage image={image} />
      <CartItemRightSide id ={id} name={name} price={price} quantity={quantity} />
    </div>
  );
};

export default CartItem;
