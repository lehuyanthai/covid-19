import React from 'react';
import { AddAddressIcon } from '../../../../icons';

import './styles.scss';

interface IAddLink {
  label: string;
  onClick: () => void;
}

const AddLink = ({ label, onClick }: IAddLink) => {
  return (
    <div className='add-link' onClick={onClick}>
      <AddAddressIcon />
      <span>{label}</span>
    </div>
  );
};

export default AddLink;
