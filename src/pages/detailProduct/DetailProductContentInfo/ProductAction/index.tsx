import React, { SetStateAction } from 'react';
import Button from '../../../../components/Button';
import GroupButton from '../../../../components/GroupButton';
import IconButton from '../../../../components/IconButton';
import { FavoriteIcon } from '../../../../icons';

import './styles.scss';

interface IProductAction {
  amount: number;
  setAmount: React.Dispatch<SetStateAction<number>>;
  addToCart: () => void;
}

const ProductAction = ({ addToCart, amount, setAmount }: IProductAction) => {
  return (
    <div className='product-action '>
      <GroupButton value={amount} setValue={setAmount} />
      <Button
        children='Add to cart'
        extraClass='product-action__btn'
        onClick={addToCart}
      />
      <IconButton icon={<FavoriteIcon />} border onClick={() => {}} />
    </div>
  );
};

export default ProductAction;
