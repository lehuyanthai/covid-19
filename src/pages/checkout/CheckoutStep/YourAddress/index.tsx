import React, { SetStateAction, useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import { ArrowIcon } from '../../../../icons';
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress';

import './styles.scss';

interface IYourAddress {
  stepBack: () => void;
  stepForward: () => void;
  shippingAddress: { heading: string; address: string };
  setBillingAddress: React.Dispatch<
    SetStateAction<{ heading: string; address: string }>
  >;
  billingAddress: { heading: string; address: string };
  setShippingAddress: React.Dispatch<
    SetStateAction<{ heading: string; address: string }>
  >;
}

const YourAddress = ({
  stepBack,
  stepForward,
  shippingAddress,
  billingAddress,
  setBillingAddress,
  setShippingAddress,
}: IYourAddress) => {
  const [sameAsBillingAddress, setSameAsBillingAddress] = useState(false);
  useEffect(() => {
    if (sameAsBillingAddress) {
      setBillingAddress(shippingAddress);
    } else {
      setBillingAddress({ heading: '', address: '' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sameAsBillingAddress]);

  return (
    <div className='your-address'>
      <ShippingAddress
        shippingAddress={shippingAddress}
        setShippingAddress={setShippingAddress}
      />
      <BillingAddress
        setChecked={setSameAsBillingAddress}
        checked={sameAsBillingAddress}
        billingAddress={billingAddress}
        setBillingAddress={setBillingAddress}
      />
      <div className='your-address__button'>
        <div className='back' onClick={stepBack}>
          <ArrowIcon />
          Back
        </div>
        <Button
          children='Continue'
          onClick={stepForward}
          extraClass='continue'
        />
      </div>
    </div>
  );
};

export default YourAddress;
