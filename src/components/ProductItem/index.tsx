import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, FavoriteIcon } from '../../icons';
import { addProduct } from '../../slice/cartSlice';
import IconButton from '../IconButton';
import ProductItemBody from './ProductItemBody';
import ProductItemHead from './ProductItemHead';

import './styles.scss';

export interface IProduct {
  id: string;
  name: string;
  category:string;
  price: number;
  discount: number;
  rating: number;
  colors: string[];
  description: string;
  customerReview: number;
  images: string[];
}

const ProductItem = ({
  id,
  name,
  category,
  price,
  discount,
  rating,
  colors,
  description,
  customerReview,
  images,
}: IProduct) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    navigate(`/detailproduct/${id}`)
  }
  const addToCart = () => {
    dispatch(
      addProduct({
        id: id,
        color: colors[0],
        image: images[0],
        name: name,
        price: price,
        quantity: 1,
      })
    );
  };
  return (
    <div className='product-item'>
      <ProductItemHead addToCart={addToCart} id={id} image={images[1]} discount={discount} firstButton={<IconButton icon={<EyeIcon/>} onClick={handleClick}/>  } secondButton={<IconButton icon={<FavoriteIcon/>} onClick={handleClick}/>}/>
      <ProductItemBody name={name} newPrice={price} oldPrice={price} rating={rating}/>
    </div>
  );
};

export default ProductItem;
