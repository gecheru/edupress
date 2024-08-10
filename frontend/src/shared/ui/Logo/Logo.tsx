import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { LogoSize } from './types/LogoSize';
import { RouterPaths } from 'shared/constants';

interface Props {
  size?: LogoSize;
}

export const Logo: FC<Props> = ({ size = LogoSize.Md }) => {
  const imgClass = classNames({
    'w-5': size === LogoSize.Sm,
    'lg:w-7': size === LogoSize.Sm,
    'w-7': size === LogoSize.Md,
    'lg:w-10': size === LogoSize.Md,
  });
  const textClass = classNames('font-exo  font-bold text-black ', {
    'text-xl': size === LogoSize.Sm,
    'lg:text-2xl': size === LogoSize.Sm,
    'text-2xl': size === LogoSize.Md,
    'lg:text-3xl': size === LogoSize.Md,
  });
  return (
    <NavLink to={RouterPaths.Index} className='inline-flex'>
      <img src='/logo.svg' className={imgClass} />
      <span className={textClass}>EduPress</span>
    </NavLink>
  );
};
