import React from 'react'
import { ICartProduct } from '../../../../slice/cartSlice'
import CartItem from './CartItem'

import './styles.scss'

interface ICartContent {
    products: ICartProduct[],
}

const CartContent = ({products}:ICartContent) => {
    const renderedListCartItem = products.map((item,index) => (<CartItem key={index} cartProductData={item}/>))
  return (
    <div className='cart-content'>
        {renderedListCartItem}
    </div>
  )
}

export default CartContent