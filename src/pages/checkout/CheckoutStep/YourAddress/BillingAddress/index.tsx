import { SetStateAction } from 'react';
import CheckBox from '../../../../../components/CheckBox';
import AddLink from '../../AddLink';

import './styles.scss';

interface IBillingAddress {
  checked: boolean;
  setChecked: React.Dispatch<SetStateAction<boolean>>;
  billingAddress: { heading: string; address: string };
  setBillingAddress: React.Dispatch<
    SetStateAction<{ heading: string; address: string }>
  >;
}

const BillingAddress = ({
  checked,
  setChecked,
  billingAddress,
  setBillingAddress,
}: IBillingAddress) => {
  return (
    <div className='billing-address'>
      <div className='billing-address__label'>Billing address</div>
      <CheckBox
        checked={checked}
        setChecked={setChecked}
        label='Same as billing address'
      />
      <AddLink label='Add billing address' onClick={() => {}} />
    </div>
  );
};

export default BillingAddress;
