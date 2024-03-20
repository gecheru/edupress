import { RouterPaths } from '@constants/routerPaths';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  extraClass: string;
}

const ProfileLink: FC<Props> = ({ extraClass }) => {
  return (
    <NavLink to={RouterPaths.Auth} className={extraClass}>
      Login / Register
    </NavLink>
  );
};

export default ProfileLink;
