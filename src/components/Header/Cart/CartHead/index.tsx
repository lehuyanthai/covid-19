import React from 'react'

import './styles.scss'

interface ICartHead {
    onClose: () => void;
}

const CartHead = ({onClose}:ICartHead) => {
  return (
    <div className='cart-head'>
        <div className='cart-head__title'>Shooping cart</div>
        <div className='cart-head__button' onClick={onClose}>&times;</div>
    </div>
  )
}

export default CartHead