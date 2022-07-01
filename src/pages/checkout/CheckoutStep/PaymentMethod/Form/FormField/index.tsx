import React, { FormEvent, SetStateAction } from 'react';

import './styles.scss';

interface IFormField {
  label: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  type: 'text' | 'date';
}

const FormField = ({ label, value, setValue, type }: IFormField) => {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const renderedInput = (type: 'text' | 'date') => {
        return (
          <input
            className='form-field__input'
            type={type==='text'?'text':'date'}
            value={value}
            onChange={handleChange}
          />
        );
  };
  return (
    <div className='form-field'>
      <div className='form-field__label'>{label}*</div>
      {renderedInput(type)}
    </div>
  );
};

export default FormField;
