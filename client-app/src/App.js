
import React from 'react';
import Header from '../src/components/layouts/Header'
import Footer from './components/layouts/Footer';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/product/:id' element={<Product />}></Route>
          <Route exact path='/' element={<Main />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
