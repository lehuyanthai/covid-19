import clsx from 'clsx';
import { FormEvent, useState } from 'react';
import { IFormField } from '../AuthForm';

import './styles.scss';

interface IAuthField {
  label: string;
  name: string;
  value: string;
  password?: boolean;
  error?: boolean;
  onChange: (data: IFormField) => void;
}

const AuthField = ({
  label,
  name,
  value,
  password = false,
  error = false,
  onChange,
}: IAuthField) => {
  const [inputValue, setInputValue] = useState(value);
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const handleBlur = () => {
    const data: IFormField = {
      label,
      name,
      value: inputValue,
      isError: error,
    };
    onChange(data);
  };
  const renderedField = () => {
    return (
      <>
        <div className='auth-field__label'>{label} *</div>
        <input
          type={password ? 'password' : 'text'}
          name={name}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          className={clsx({
            'auth-field__input': true,
            'auth-field__error': error,
          })}
        />
      </>
    );
  };
  return <div className='auth-field'>{renderedField()}</div>;
};

export default AuthField;
