import { RouterPaths } from '@constants/routerPaths';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to={RouterPaths.Index} className='inline-flex'>
      <img src='/logo.svg' />
      <span className='font-exo text-3xl font-bold'>EduPress</span>
    </NavLink>
  );
};

export default Logo;
