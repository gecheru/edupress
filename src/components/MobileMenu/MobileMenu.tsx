import Logo from '@components/Logo/Logo';
import classNames from 'classnames';
import { FC, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { LinkItem } from 'src/types/LinkItem';

interface Props {
  links: LinkItem[];
  menuVisibilityHandler: (value: boolean) => void;
  isOpened: boolean;
}

const MobileMenu: FC<Props> = ({ isOpened, links, menuVisibilityHandler }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuClass = classNames(
    'border-r fixed top-0 h-full w-[250px] border-r-gray-light bg-white ease-in-out duration-300 lg:hidden',
    {
      'left-[-100%]': !isOpened,
      'left-0': isOpened,
    },
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && menuRef.current.contains(e.target as Node)) {
        menuVisibilityHandler(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [menuVisibilityHandler]);

  return (
    <>
      {isOpened && (
        <div className='fixed bottom-0 left-0 right-0 top-0 bg-gray-dark opacity-70 lg:hidden'></div>
      )}
      <nav className={menuClass} ref={menuRef}>
        <div className='px-4 py-4'>
          <Logo />
        </div>
        <ul>
          {links.map((link, key) => (
            <li key={key}>
              <NavLink
                to={link.path}
                className='block px-4 py-2 [&.active]:bg-gray-white [&.active]:text-primary'
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
