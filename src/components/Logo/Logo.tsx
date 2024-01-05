import { RouterPaths } from '@constants/routerPaths';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to={RouterPaths.Index} className='inline-flex'>
      <img src='/logo.svg' className='w-7 lg:w-10' />
      <span className='font-exo text-2xl font-bold text-black lg:text-3xl'>
        EduPress
      </span>
    </NavLink>
  );
};

export default Logo;
