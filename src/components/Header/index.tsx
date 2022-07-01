import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HEADER_MENU } from '../../constant';
import { useAppSelector } from '../../hooks/useAppSelector';
import { authLogout } from '../../slice/userSlice';
import Button from '../Button';
import Cart from './Cart';
import CartButton from './CartButton';
import Logo from './Logo';
import './styles.scss';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let user = useAppSelector(state => state.user.user)
  console.log(user);
  

  const renderMenuList = HEADER_MENU.map((item) => (
    <Link to={item.link} className='header__list--item' key={item.key}>
      {item.label}
    </Link>
  ));

  const handleClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    dispatch(authLogout());
  };

  const renderedButton = () => {
    return _.isEmpty(user) ? (
      <Button
        extraClass='header__list--button'
        onClick={handleClick}
        children='Log in'
      />
      ) : (
      <Button
        extraClass='header__list--button'
        onClick={handleLogout}
        children='Log out'
      />
    );
  };

  return (
    <div className='header'>
      <div className='header__logo' onClick={() => navigate('/home')}>
        <Logo />
      </div>
      <div className='header__list'>
        {renderMenuList}
        <CartButton />
        {renderedButton()}
      </div>
      <Cart />
    </div>
  );
};

export default Header;
