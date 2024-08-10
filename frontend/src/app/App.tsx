import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './routers';

export const App = () => {
  return (
    <RouterProvider router={AppRouter} />
  );
};
