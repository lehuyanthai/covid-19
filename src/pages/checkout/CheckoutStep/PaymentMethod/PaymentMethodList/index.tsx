import React, { SetStateAction } from 'react';
import { PAYMENT_METHODS } from '../../../../../constant';
import {
  CashPaymentIcon,
  CreditCardIcon,
  GooglePayIcon,
  PaypalIcon,
} from '../../../../../icons';
import PaymentMethodListItem from './PaymentMethodListItem';

import './styles.scss';

const PAYMENT_METHOD_LIST = [
  {
    label: PAYMENT_METHODS['CREDIT_CARD'],
    getIcon(isActive = false) {
      return (
        <CreditCardIcon
          width={34}
          height={34}
          color={isActive ? '#C30A00' : '#434A5A'}
        />
      );
    },
  },
  {
    label: PAYMENT_METHODS['CASH_PAYMENT'],
    getIcon(isActive = false) {
      return (
        <CashPaymentIcon
          width={31}
          height={31}
          color={isActive ? '#C30A00' : '#434A5A'}
        />
      );
    },
  },
  {
    label: PAYMENT_METHODS['PAYPAL'],
    getIcon(isActive = false) {
      return (
        <PaypalIcon
          width={26}
          height={30}
          color={isActive ? '#C30A00' : '#434A5A'}
        />
      );
    },
  },
  {
    label: PAYMENT_METHODS['GOOGLE_PAY'],
    getIcon(isActive = false) {
      return <GooglePayIcon width={31} height={31} color={isActive ? '#C30A00' : '#434A5A'} />;
    },
  },
];

interface IPaymentMethodList {
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<SetStateAction<string>>;
}

const PaymentMethodList = ({
  paymentMethod,
  setPaymentMethod,
}: IPaymentMethodList) => {
  const renderedPaymentMethodList = PAYMENT_METHOD_LIST.map((item, index) => {
    const getLabel = () => {
      switch (item.label) {
        case 'CREDIT_CARD':
          return 'Credit card';
        case 'CASH_PAYMENT':
          return 'Cash payment';
        case 'PAYPAL':
          return 'Paypal';
        case 'GOOGLE_PAY':
          return 'Google pay';
        default:
          return '';
      }
    };

    const label = getLabel();
    const isActive = label === paymentMethod;

    const icon = item.getIcon(isActive);

    return (
      <PaymentMethodListItem
        key={index}
        icon={icon}
        label={label}
        active={isActive}
        setActive={setPaymentMethod}
      />
    );
  });
  return <div className='payment-method-list'>{renderedPaymentMethodList}</div>;
};

export default PaymentMethodList;
