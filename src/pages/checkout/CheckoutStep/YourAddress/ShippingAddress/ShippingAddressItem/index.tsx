import clsx from 'clsx';
import React, { SetStateAction } from 'react';
import BorderCircle from '../../../../../../components/BorderCircle';
import Button from '../../../../../../components/Button';

import './styles.scss';

interface IShippingAddressItem {
  active: boolean;
  itemIndex: number;
  setSelectedAddress: React.Dispatch<SetStateAction<{ heading: string; address: string }>>;
  heading: string;
  address: string;
  onEdit: () => void;
}

const ShippingAddressItem = ({
  active,
  itemIndex,
  setSelectedAddress,
  address,
  heading,
  onEdit,
}: IShippingAddressItem) => {
    const handleClick = () => {
        setSelectedAddress({heading,address})
    }
  return (
    <div className='shipping-address-item'>
      <BorderCircle
        active={active}
        itemIndex={itemIndex}
        setItemActive={handleClick}
      />
      <div className='shipping-address-item__content'>
        <div className='shipping-address-item__content--heading'>
            <div className="heading">{heading}</div>
            <div className="address">{address}</div>
        </div>
        <Button children="Edit" onClick={onEdit} extraClass={clsx({'edit-button':true,'disable':!active})}/>
      </div>
    </div>
  );
};

export default ShippingAddressItem;
