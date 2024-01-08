import Burger from '@components/Burger/Burger';
import Logo from '@components/Logo/Logo';
import DesktopMenu from '@components/DesktopMenu/DesktopMenu';
import MobileMenu from '@components/MobileMenu/MobileMenu';
import ProfileLink from '@components/ProfileLink/ProfileLink';
import { RouterPaths } from '@constants/routerPaths';
import { useState } from 'react';
import { LinkItem } from 'src/types/LinkItem';

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

const Navigation = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <nav className='bg-white'>
      <div className='container flex items-center justify-between py-3 xl:container lg:py-0'>
        <Logo />
        <Burger
          extraClass={'lg:hidden'}
          isOpened={isMobileMenuOpened}
          onClick={setIsMobileMenuOpened}
        />
        <DesktopMenu extraClass={'hidden lg:flex'} links={links} />
        <ProfileLink />
        <MobileMenu
          links={links}
          menuVisibilityHandler={setIsMobileMenuOpened}
          isOpened={isMobileMenuOpened}
        />
      </div>
    </nav>
  );
};

export default Navigation;
