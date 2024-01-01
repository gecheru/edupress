import Logo from '@components/Logo/Logo';

const Navigation = () => {
  return (
    <nav>
      <div className='container grid auto-cols-max grid-flow-col xl:container'>
        <Logo />
      </div>
    </nav>
  );
};

export default Navigation;
