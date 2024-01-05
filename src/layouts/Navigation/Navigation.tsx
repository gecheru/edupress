import Burger from '@components/Burger/Burger';
import Logo from '@components/Logo/Logo';
import Menu from '@components/Menu/Menu';
import ProfileLink from '@components/ProfileLink/ProfileLink';

const Navigation = () => {
  return (
    <nav className='bg-white'>
      <div className='container flex items-center justify-between py-3 xl:container lg:py-0'>
        <Logo />
        <Burger />
        <Menu />
        <ProfileLink />
      </div>
    </nav>
  );
};

export default Navigation;
