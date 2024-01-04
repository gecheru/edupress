import Header from '@components/Header/Header';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import Footer from '@components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={Router} />
      <Footer />
    </>
  );
};

export default App;
