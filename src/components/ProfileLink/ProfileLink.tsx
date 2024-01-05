import { RouterPaths } from '@constants/routerPaths';
import { NavLink } from 'react-router-dom';

const ProfileLink = () => {
  return (
    <NavLink to={RouterPaths.Auth} className='hidden lg:block'>
      Login / Register
    </NavLink>
  );
};

export default ProfileLink;
