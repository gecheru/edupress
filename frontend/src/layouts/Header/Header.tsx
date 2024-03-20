import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs';
import { RouterPaths } from '@constants/routerPaths';
import Navigation from '@layouts/Navigation/Navigation';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <Navigation />
      {location.pathname !== RouterPaths.Index && <Breadcrumbs />}
    </header>
  );
};

export default Header;
