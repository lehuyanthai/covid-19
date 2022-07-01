import { isEqual } from 'lodash';
import React from 'react';
import Button from '../../../../components/Button';
import { ArrowIcon } from '../../../../icons';

import './styles.scss';

interface IConfirmDelivery {
  shippingAddress: { heading: string; address: string };
  billingAddress: { heading: string; address: string };
  stepBack: () => void;
  stepForward: () => void;
}
const ConfirmDelivery = ({
  stepBack,
  stepForward,
  shippingAddress,
  billingAddress,
}: IConfirmDelivery) => {
  const renderedOrderNumber = () => (
    <div className='order-number'>
      <div className='heading'>Order number</div>
      <div className='number'>X8442876</div>
    </div>
  );
  const renderedConfirmDelivery = [shippingAddress, billingAddress].forEach(
    (item, index) => {
      if (!isEqual(item, { heading: '', address: '' }))
        return (
          <div className='confirm-delivery__item'>
            <div className='confirm-delivery__item--title'>
              {index === 0 ? 'Shipping address' : 'Billing address'}
            </div>
            <div className='shipping-address-item__content'>
              <div className='shipping-address-item__content--heading'>
                <div className='heading'>{item.heading}</div>
                <div className='address'>{item.address}</div>
              </div>
              <Button
                children='Edit'
                onClick={() => {}}
                extraClass='edit-button'
              />
            </div>
          </div>
        );
    }
  );
  return (
    <>
      <div className='confirm-delivery'>
        <>
          {renderedOrderNumber()}
          {renderedConfirmDelivery}
        </>
      </div>
      <div className='your-address__button'>
        <div className='back' onClick={stepBack}>
          <ArrowIcon />
          Back
        </div>
        <Button
          children='Confirm Order'
          onClick={stepForward}
          extraClass='continue'
        />
      </div>
    </>
  );
};

export default ConfirmDelivery;
