import React from 'react'
import ProductCollectionItem from './ProductCollectionItem'
import bg1 from '../../../assets/images/collection1.png';
import bg2 from '../../../assets/images/collection2.png';
import bg3 from '../../../assets/images/collection3.png';

import './styles.scss'

const ProductCollection = () => {
  return (
    <div className='product-collection'>
        <ProductCollectionItem background={bg1}/>
        <ProductCollectionItem background={bg2}/>
        <ProductCollectionItem background={bg3}/>
    </div>
  )
}

export default ProductCollection