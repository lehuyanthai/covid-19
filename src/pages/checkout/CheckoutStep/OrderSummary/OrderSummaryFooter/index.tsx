import React from 'react'
import OrderSummaryFooterBody from './OrderSummaryFooterBody';

import './styles.scss'
import TotalOrder from './TotalOrder';

const OrderSummaryFooter = () => {
    
  return (
    <div className='order-summary-footer'>
        <OrderSummaryFooterBody/>
        <TotalOrder />
    </div>
  )
}

export default OrderSummaryFooter