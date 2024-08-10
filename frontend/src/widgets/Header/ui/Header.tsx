import { useLocation } from 'react-router-dom';
import { RouterPaths } from 'shared/constants';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';
import { Navigation } from 'widgets/Navigation';

export const Header = () => {
  const location = useLocation();
  return (
    <header>
      <Navigation />
      {location.pathname !== RouterPaths.Index && <Breadcrumbs />}
    </header>
  );
};
