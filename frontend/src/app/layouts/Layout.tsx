import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

export const Layout = () => {
  return (
    <div className='grid h-[100dvh] grid-rows-page'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
