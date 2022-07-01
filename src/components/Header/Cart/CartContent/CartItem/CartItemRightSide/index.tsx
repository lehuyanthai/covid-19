import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../../app/store';
import { BinIcon } from '../../../../../../icons';
import { decrease, increase, removeProduct } from '../../../../../../slice/cartSlice';
import GroupButton from '../../../../../GroupButton';
import IconButton from '../../../../../IconButton';
import Price from '../../../../../Price';

interface ICartItemRightSide {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartItemRightSide = ({
  id,
  name,
  price,
  quantity,
}: ICartItemRightSide) => {
  const dispatch = useAppDispatch();

  const productQuantity = useSelector(
    (state: RootState) => state.cart.products
  ).find((item) => item.id === id)?.quantity;
  const handleIncrease = () => {
    dispatch(increase(id));
  };

  const handleDecrease = () => {
    if (productQuantity === 1) {
      return;
    }
    dispatch(decrease(id));
  };

  const handleRemove = () => {
    dispatch(removeProduct(id))
  }

  return (
    <div className='cart-item__right-side'>
      <div className='cart-item__right-side--info'>
        <div className='cart-item__right-side--info-name'>{name}</div>
        <Price newPrice={price} oldPrice={price} />
      </div>
      <GroupButton
        value={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
      <IconButton icon={<BinIcon />} onClick={handleRemove} />
    </div>
  );
};

export default CartItemRightSide;
