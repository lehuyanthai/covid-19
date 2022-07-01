import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Checkout from '../pages/checkout';
import DetailProduct from '../pages/detailProduct';
import Home from '../pages/home';
import Products from '../pages/products';
import Auth from '../pages/auth';

const MainRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/detailproduct/:id' element={<DetailProduct />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/signup' element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
