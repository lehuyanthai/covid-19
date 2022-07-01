import { SetStateAction, useState } from 'react';
import { AddAddressIcon } from '../../../../../icons';
import AddLink from '../../AddLink';
import ShippingAddressItem from './ShippingAddressItem';

import { isEqual } from 'lodash';

import './styles.scss';

const ADDRESS_LIST = [
  {
    heading: 'Heading here...',
    address:
      'X8442876 - issued in California Olive Lane Cape Coral, FL 33904Akshya Nagar Bangalore-560016',
  },
  {
    heading: 'Heading here...',
    address:
      'X84428123 - issued in California Olive Lane Cape Coral, FL 33904Akshya Nagar Bangalore-560016',
  },
];

interface IShippingAddress {
  shippingAddress: { heading: string; address: string };
  setShippingAddress: React.Dispatch<SetStateAction<{ heading: string; address: string }>
  >;
}

const ShippingAddress = ({shippingAddress,setShippingAddress}:IShippingAddress) => {
  const renderedAddressItem = ADDRESS_LIST.map((item, index) => {
    const isActive = isEqual(item,shippingAddress)
    return (
      <ShippingAddressItem
        key={index}
        itemIndex={index}
        active={isActive}
        address={item.address}
        heading={item.heading}
        onEdit={() => {}}
        setSelectedAddress={setShippingAddress}
      />
    );
  });
  return (
    <div className='shipping-address'>
      <div className='shipping-address__label'>Shipping address</div>
      {renderedAddressItem}
      <AddLink label='Add new address' onClick={() => {}} />
    </div>
  );
};

export default ShippingAddress;
