import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/store';
import { IProduct } from '../../components/ProductItem';
import { DEFAULT_PRODUCT_DATA } from '../../constant';
import { addProduct } from '../../slice/cartSlice';
import backToTop from '../../utils/backToTop';
import DetailProductContentInfo from './DetailProductContentInfo';
import DetailProductContentPreview from './DetailProductContentPreview';
import DetailProductDescription from './detailProductDescription';

import './styles.scss';

export enum IDetailProductTab {
  DESCRIPTION = 'description',
  INFORMATION = 'information',
  REVIEW = 'review',
}

const DetailProduct = () => {
  const [productData, setProductData] =
    useState<IProduct>(DEFAULT_PRODUCT_DATA);
  const [curentTab, setCurrentTab] = useState<string>('description');
  const [selectedImage, setSelectedImage] = useState<string>(
    productData.images[0]
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    productData.colors[1]
  );
  const [amount, setAmount] = useState<number>(1);

  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    backToTop();
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res: AxiosResponse) => setProductData(res.data));
  }, [id]);

  const addToCart = () => {
    dispatch(
      addProduct({
        id: productData.id,
        color: selectedColor,
        image: productData.images[0],
        name: productData.name,
        price: productData.price,
        quantity: amount,
      })
    );
  };

  return (
    <div className='detail-product'>
      <div className='detail-product-content'>
        <DetailProductContentPreview
          listImage={productData.images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <DetailProductContentInfo
          name={productData.name}
          price={productData.price}
          description={productData.description}
          colors={productData.colors}
          rating={productData.rating}
          customerReview={productData.customerReview}
          amount={amount}
          setAmount={setAmount}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          addToCart={addToCart}
        />
      </div>
      <DetailProductDescription
        productId={productData.id}
        currentTab={curentTab}
        setCurrentTab={setCurrentTab}
      />
    </div>
  );
};

export default DetailProduct;
