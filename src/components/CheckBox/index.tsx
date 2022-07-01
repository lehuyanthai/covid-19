import React, { SetStateAction } from 'react';

import './styles.scss';

interface ICheckBox {
    label:string,
    checked:boolean,
    setChecked: React.Dispatch<SetStateAction<boolean>>
}

const CheckBox = ({label,setChecked,checked=false}:ICheckBox) => {
    const handleChange = () => {
        setChecked(!checked)
    }
  return (
    <div className='checkbox'>
      <input type='checkbox' checked={checked} onChange={handleChange}/>
      <span>{label}</span>
    </div>
  );
};

export default CheckBox;
