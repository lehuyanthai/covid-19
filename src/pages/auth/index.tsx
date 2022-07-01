import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import image from '../../assets/images/auth.png';
import AuthForm from '../../components/Auth/AuthForm';
import backToTop from '../../utils/backToTop';

import './styles.scss';

const Auth = () => {
  let { pathname } = useLocation();
  useEffect(() => {
    backToTop();
  }, []);

  return (
    <div className='sign-up'>
      <div className='sign-up__wrapper'>
        <div className='sign-up__wrapper--left-side'>
          <img src={image} alt='' />
        </div>
        <div className='sign-up__wrapper--right--side'>
          <AuthForm mode={pathname.slice(1)} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
