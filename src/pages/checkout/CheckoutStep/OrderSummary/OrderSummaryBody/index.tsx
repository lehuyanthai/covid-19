import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../app/store';
import OrderItem from './OrderItem';

const OrderSummaryBody = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.products
  );
  const renderedOrderItems = cartProducts.map((item) => (
    <OrderItem key={item.id} image={item.image} name={item.name} price={item.price} />
  ));

  return <>{renderedOrderItems}</>;
};

export default OrderSummaryBody;
