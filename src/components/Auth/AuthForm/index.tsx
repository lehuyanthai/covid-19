import axios from 'axios';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_ROOT } from '../../../constant';
import { useAppSelector } from '../../../hooks/useAppSelector';
import {
  authFail,
  authStart,
  IUser,
  loginSuccess,
  registerSuccess,
} from '../../../slice/userSlice';
import { validateFormField } from '../../../utils';
import Button from '../../Button';
import Spinner from '../../Spinner';
import AuthField from '../AuthField';

import './styles.scss';

interface IAuthForm {
  mode: string | null;
}

type Scope = 'register' | 'login';

export interface IFormField {
  label: string;
  name: string;
  value: string;
  isError: boolean;
}

interface ILoginFormData {
  email: IFormField;
  password: IFormField;
}

interface ISignUpFormData extends ILoginFormData {
  confirmPassword: IFormField;
  firstName: IFormField;
  lastName: IFormField;
  [key: string]: IFormField;
}

interface IResponseData {
  accessToken: string;
  user: IUser;
}

const AuthForm = ({ mode = 'login' }: IAuthForm) => {
  const [authFormData, setAuthFormData] = useState<ISignUpFormData>({
    lastName: {
      label: 'Last Name',
      name: 'lastName',
      value: '',
      isError: false,
    },
    firstName: {
      label: 'First Name',
      name: 'firstName',
      value: '',
      isError: false,
    },
    email: {
      label: 'Email',
      name: 'email',
      value: '',
      isError: false,
    },
    password: {
      label: 'Password',
      name: 'password',
      value: '',
      isError: false,
    },
    confirmPassword: {
      label: 'Confirm Password',
      name: 'confirmPassword',
      value: '',
      isError: false,
    },
  });

  const error = useAppSelector((state) => state.user.error);
  const isLoading = useAppSelector((state) => state.user.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updatedAuthForm = (data: IFormField) => {
    const { value, name } = data;

    const isError = validateFormField(name, value);

    const newAuthForm = { ...authFormData };
    const obj = { ...newAuthForm[name] };
    obj.isError = isError;
    obj.value = value;

    newAuthForm[name] = obj;

    setAuthFormData({ ...newAuthForm });
  };

  const handleAuth = async (scope: Scope) => {
    const URL = API_ROOT + '/' + scope;
    let formData = {};

    let isValidated = !_.some(authFormData, 'isError');

    if (isValidated) {
      if (scope === 'login')
        formData = {
          email: authFormData.email.value,
          password: authFormData.password.value,
        };
      else
        formData = {
          email: authFormData.email.value,
          password: authFormData.password.value,
          firstName: authFormData.firstName.value,
          lastName: authFormData.lastName.value,
        };
    } else return;

    dispatch(authStart());

    try {
      const res = await axios.post(URL, formData);
      const { accessToken, user }: IResponseData = res.data;
      if (!_.isNil(res.data) && _.size(res.data) > 0 && res.data.accessToken) {
        if (scope === 'login') {
          dispatch(
            loginSuccess({
              accessToken: accessToken,
              error: null,
              loading: false,
              user,
            })
          );
          navigate('/home');
        } else {
          dispatch(registerSuccess());
          navigate('/login');
        }
      }
    } catch (error: any) {
      console.log(error.response.data);
      dispatch(authFail(error.response.data));
    }
  };

  const renderedErrorMessage = () => {
    return error && <div className='auth-form__error'>{error}</div>;
  };

  const renderedLoginForm = () => {
    return (
      <div className='auth-form'>
        <div className='auth-form__title'>Welcome Back!</div>
        <div className='auth-form__subtitle'>
          First login your free account then start shopping.
        </div>
        <AuthField
          label='email'
          name='email'
          value={authFormData.email.value}
          onChange={updatedAuthForm}
          error={authFormData.email.isError}
        />
        <AuthField
          label='password'
          name='password'
          value={authFormData.password.value}
          onChange={updatedAuthForm}
          password
          error={authFormData.email.isError}
        />
        {renderedErrorMessage()}

        <Button
          children='Login'
          extraClass='auth-form__button'
          onClick={() => handleAuth('login')}
        />

        <div className='auth-form__footer'>
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}>Sign up here</span>
        </div>
      </div>
    );
  };

  const renderedSignUpForm = () => {
    return (
      <div className='auth-form'>
        <div className='auth-form__title'>Welcome to</div>
        <div className='auth-form__subtitle'>
          First create your free account then start shopping.
        </div>
        <div className='auth-form__flex'>
          <AuthField
            label='First Name'
            name='firstName'
            value={authFormData.firstName.value}
            onChange={updatedAuthForm}
            error={authFormData.firstName.isError}
          />
          <AuthField
            label='Last Name'
            name='lastName'
            value={authFormData.lastName.value}
            onChange={updatedAuthForm}
            error={authFormData.lastName.isError}
          />
        </div>
        <AuthField
          label='Email'
          name='email'
          value={authFormData.email.value}
          onChange={updatedAuthForm}
          error={authFormData.email.isError}
        />
        <AuthField
          label='Password'
          name='password'
          value={authFormData.password.value}
          onChange={updatedAuthForm}
          password
          error={authFormData.password.isError}
        />
        <AuthField
          label='Confirm Password'
          name='confirmPassword'
          value={authFormData.password.value}
          password
          error={authFormData.confirmPassword.isError}
          onChange={updatedAuthForm}
        />
        {renderedErrorMessage()}

        <Button
          children='Create account'
          extraClass='auth-form__button sign-up-btn'
          onClick={() => handleAuth('register')}
        />

        <div className='auth-form__footer'>
          if you already have an account?{' '}
          <span onClick={() => navigate('/login')}> Sign in here</span>
        </div>
      </div>
    );
  };
  return (
    <>
      {isLoading && (
        <div className='loading'>
          <div className='spinner'>
            <Spinner />
          </div>
        </div>
      )}
      {mode === 'login' ? renderedLoginForm() : renderedSignUpForm()}
    </>
  );
};

export default AuthForm;
