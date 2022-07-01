import React, { SetStateAction } from 'react';
import FormField from './FormField';

import './styles.scss';

interface IForm {
  cardNumber: string;
  setCardNumber: React.Dispatch<SetStateAction<string>>;
  holderName: string;
  setHolderName: React.Dispatch<SetStateAction<string>>;
  setExpiryDate: React.Dispatch<SetStateAction<string>>;
  setCVVCode: React.Dispatch<SetStateAction<string>>;
  expiryDate: string;
  CVVCode: string;
}

const Form = ({
  cardNumber,
  setCardNumber,
  holderName,
  setHolderName,
  setExpiryDate,
  setCVVCode,
  expiryDate,
  CVVCode,
}: IForm) => {
  return (
    <div className='form'>
      <div className='form__side'>
        <FormField
          label='Card Number'
          setValue={setCardNumber}
          type='text'
          value={cardNumber}
        />
        <FormField
          label='Expiry Date'
          setValue={setExpiryDate}
          type='date'
          value={expiryDate}
        />
      </div>
      <div className='form__side'>
        <FormField
          label='Holder Name'
          setValue={setHolderName}
          type='text'
          value={holderName}
        />
        <FormField
          label='CVV Code'
          setValue={setCVVCode}
          type='text'
          value={CVVCode}
        />
      </div>
    </div>
  );
};

export default Form;
