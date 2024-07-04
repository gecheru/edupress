import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { LinkItem } from 'widgets/Navigation';

interface Props {
  links: LinkItem[];
  extraClass?: string;
}

export const DesktopMenu: FC<Props> = ({ links, extraClass }) => {
  const menuClass = classNames('items-center', extraClass);
  return (
    <ul className={menuClass}>
      {links.map((link, key) => (
        <li key={key}>
          <NavLink
            to={link.path}
            className='flex h-20 items-center px-5 font-exo font-semibold transition-all hover:bg-gray-white [&.active]:bg-gray-white [&.active]:text-primary'
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
