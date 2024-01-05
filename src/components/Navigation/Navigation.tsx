import Logo from '@components/Logo/Logo';
import Menu from '@components/Menu/Menu';
import ProfileLink from '@components/ProfileLink/ProfileLink';

const Navigation = () => {
  return (
    <nav className='bg-white'>
      <div className='container flex items-center justify-between xl:container'>
        <Logo />
        <Menu />
        <ProfileLink />
      </div>
    </nav>
  );
};

export default Navigation;
