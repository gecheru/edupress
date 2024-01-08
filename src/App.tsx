import './App.css';
import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header/Header';
import Footer from '@layouts/Footer/Footer';

const App = () => {
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

export default App;
