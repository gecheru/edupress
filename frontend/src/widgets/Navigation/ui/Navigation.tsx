import { useState } from 'react';
import { LinkItem } from '../types/LinkItem';
import { Logo } from 'shared/ui/Logo';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { Burger } from 'shared/ui/Burger';
import { ProfileLink } from './ProfileLink';
import { RouterPaths } from 'shared/constants';

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

export const Navigation = () => {
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
        <ProfileLink extraClass={'hidden lg:flex'} />
        <MobileMenu
          links={links}
          menuVisibilityHandler={setIsMobileMenuOpened}
          isOpened={isMobileMenuOpened}
        />
      </div>
    </nav>
  );
};
