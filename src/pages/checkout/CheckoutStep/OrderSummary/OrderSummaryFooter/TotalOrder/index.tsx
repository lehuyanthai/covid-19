import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../app/store'
import NewPrice from '../../../../../../components/Price/NewPrice'
import { SHIPPING_FEE, TEX_FEE } from '../../../../../../constant'

import './styles.scss'

const TotalOrder = () => {
    const orderTotal = useSelector((state:RootState) => state.cart.total)
    const totalOrderCalculator = useMemo(()=>orderTotal+SHIPPING_FEE +TEX_FEE,[orderTotal])
  return (
    <div className='total-order'>Total order :<NewPrice price={totalOrderCalculator}/></div>
  )
}

export default TotalOrder