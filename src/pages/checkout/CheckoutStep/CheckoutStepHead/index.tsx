import React from 'react';

interface ICheckoutStepHead {
  step: number;
}

const CheckoutStepHead = ({ step }: ICheckoutStepHead) => {
  const renderedCheckoutStepHeader = () => {
    if (step === 0) return 'Your Address';
    if (step === 1) return 'Payment Method';
    if (step === 2) return 'Confirm Delivery';
  };
  return (
    <div className='checkout-step__header'>{renderedCheckoutStepHeader()}</div>
  );
};

export default CheckoutStepHead;
