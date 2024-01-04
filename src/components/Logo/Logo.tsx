import { RouterPaths } from '@constants/routerPaths';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={RouterPaths.Index} className='inline-flex'>
      <img src='/logo.svg' />
      <span className='font-exo text-3xl font-bold'>EduPress</span>
    </Link>
  );
};

export default Logo;
