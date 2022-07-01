import React from 'react'
import ProductItem, { IProduct } from '../ProductItem'

import './styles.scss'

interface IGrid {
  data:IProduct[],
}

const Grid = ({data}:IGrid) => {
  return (
    <div className='grid'>
      {data.map((item)=> <ProductItem
                key={item.id}
                id={item.id}
                category={item.category}
                colors={item.colors}
                customerReview={item.customerReview}
                discount={item.discount}
                images={item.images}
                name={item.name}
                price={item.price}
                description={item.description}
                rating={item.rating}
              />)}
    </div>
  )
}

export default Grid