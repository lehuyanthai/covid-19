import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Grid from '../../../components/Grid';
import { IProduct } from '../../../components/ProductItem';
import TitleGroup from '../TitleGroup';

import './styles.scss';

const OurProduct = () => {
  const [productData, setProductData] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/products')
      .then((res: AxiosResponse) => setProductData(res.data));
  }, []);
  return (
    <div className='our-product'>
      <TitleGroup
        title='Protect Your Health'
        subTitle='Our Featured Products'
      />
      <Grid data={productData} />
    </div>
  );
};

export default OurProduct;
