import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RouterPaths } from 'shared/constants';

interface Props {
  extraClass: string;
}

export const ProfileLink: FC<Props> = ({ extraClass }) => {
  return (
    <NavLink to={RouterPaths.Auth} className={extraClass}>
      Login / Register
    </NavLink>
  );
};
