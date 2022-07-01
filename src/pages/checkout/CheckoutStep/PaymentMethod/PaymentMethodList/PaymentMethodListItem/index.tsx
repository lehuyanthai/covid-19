import clsx from 'clsx';
import React, { SetStateAction } from 'react';
import './styles.scss';

interface IPaymentMethodListItem {
  active: boolean;
  icon: JSX.Element;
  label: string;
  setActive: React.Dispatch<SetStateAction<string>>;
}

const PaymentMethodListItem = ({
  active,
  setActive,
  label,
  icon,
}: IPaymentMethodListItem) => {
  const handleClick = () => {
    setActive(label);
  };
  return (
    <div
      className={clsx({
        'payment-method-list-item': true,
        'method-active': active,
      })}
      onClick={handleClick}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default PaymentMethodListItem;
