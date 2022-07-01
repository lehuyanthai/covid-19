import CartFooterLeftSide from './CartFooterLeftSide'
import CartFooterRightSide from './CartFooterRightSide'

import './styles.scss'

const CartFooter = () => {

  return (
    <div className='cart-footer'>
      <CartFooterLeftSide />
      <CartFooterRightSide />
     
    </div>
  )
}

export default CartFooter