import { RouterPaths } from '@constants/routerPaths';
import { NavLink } from 'react-router-dom';

interface LinkItem {
  title: string;
  path: string;
  children?: LinkItem[];
}

const links: LinkItem[] = [
  {
    title: 'Home',
    path: RouterPaths.Index,
  },
  {
    title: 'Courses',
    path: RouterPaths.Courses,
  },
  {
    title: 'Blog',
    path: RouterPaths.Posts,
  },
  {
    title: 'FAQ',
    path: RouterPaths.FAQ,
  },
  {
    title: 'Contacts',
    path: RouterPaths.Contacts,
  },
];

const Menu = () => {
  return (
    <ul className='hidden items-center lg:flex'>
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

export default Menu;
