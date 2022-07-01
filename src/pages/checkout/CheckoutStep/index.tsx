import React, { SetStateAction, useState } from 'react';
import CheckoutStepHead from './CheckoutStepHead';
import ConfirmDelivery from './ConfirmDelivery';
import OrderSummary from './OrderSummary';
import PaymentMethod from './PaymentMethod';
import './styles.scss';
import YourAddress from './YourAddress';

interface ICheckoutStep {
  currentStep: number;
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
}

const CheckoutStep = ({ currentStep, setCurrentStep }: ICheckoutStep) => {
  const [shippingAddress, setShippingAddress] = useState({
    heading: '',
    address: '',
  });
  const [billingAddress, setBillingAddress] = useState({
    heading: '',
    address: '',
  });
  const stepBack = () => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  };
  const stepForward = () => {
    if (currentStep === 2) return;
    setCurrentStep(currentStep + 1);
  };
  const renderedCheckoutStep = () => {
    if (currentStep === 0)
      return (
        <YourAddress
          shippingAddress={shippingAddress}
          billingAddress={billingAddress}
          setBillingAddress={setBillingAddress}
          setShippingAddress={setShippingAddress}
          stepBack={stepBack}
          stepForward={stepForward}
        />
      );
    if (currentStep === 1)
      return <PaymentMethod stepBack={stepBack} stepForward={stepForward} />;
    if (currentStep === 2)
      return <ConfirmDelivery shippingAddress={shippingAddress}
      billingAddress={billingAddress} stepBack={stepBack} stepForward={stepForward} />;
  };

  return (
    <div className='checkout-step'>
      <CheckoutStepHead step={currentStep} />
      <div className='checkout-step__content'>
        <div className='checkout-detail'>
          <div className='checkout-detail__head'>{renderedCheckoutStep()}</div>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutStep;
