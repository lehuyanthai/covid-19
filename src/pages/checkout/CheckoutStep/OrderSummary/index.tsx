import OrderSummaryBody from './OrderSummaryBody';
import OrderSummaryFooter from './OrderSummaryFooter';
import OrderSummaryHead from './OrderSummaryHead';

import './styles.scss';

const OrderSummary = () => {
  return <div className='order-summary'>
    <OrderSummaryHead />
    <OrderSummaryBody />
    <OrderSummaryFooter/>
  </div>;
};

export default OrderSummary;
