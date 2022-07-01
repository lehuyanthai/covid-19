import React, { useState } from 'react';
import Button from '../../../../components/Button';
import CheckBox from '../../../../components/CheckBox';
import { ArrowIcon } from '../../../../icons';
import Form from './Form';
import PaymentMethodList from './PaymentMethodList';

import './styles.scss';

interface IPaymentMethod {
  stepBack: () => void;
  stepForward: () => void;
}

const PaymentMethod = ({stepBack,stepForward}:IPaymentMethod) => {
  const [paymentMethod, setPaymentMethod] = useState<string>('Credit card');
  const [saveMyCardForFuture, setSaveMyCardForFuture] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [holderName, setHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [CVVCode, setCVVCode] = useState('');
  return (
    <>
      <div className='payment-method'>
        <div className='payment-method__label'>Select card</div>
        <PaymentMethodList
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <Form
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          holderName={holderName}
          setHolderName={setHolderName}
          CVVCode={CVVCode}
          setCVVCode={setCVVCode}
          expiryDate={expiryDate}
          setExpiryDate={setExpiryDate}
        />
        <CheckBox
          checked={saveMyCardForFuture}
          setChecked={setSaveMyCardForFuture}
          label='Save my card for future'
        />
      </div>
      <div className='your-address__button'>
        <div className='back' onClick={stepBack}>
          <ArrowIcon />
          Back
        </div>
        <Button
          children='Confirm'
          onClick={stepForward}
          extraClass='continue'
        />
      </div>
    </>
  );
};

export default PaymentMethod;
