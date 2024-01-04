import './App.css';
import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header/Header';
import Footer from '@layouts/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
