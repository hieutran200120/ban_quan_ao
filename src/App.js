import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import { Suspense, lazy, useEffect, useState } from 'react';
import ProductList from './page/ProductList'
import Home from './page/Home';
import Loader from './common/Loader'
import ProductDetails from './page/ProductDetails';
import Register from './page/Rigister';
import Introduct from './page/Introduct';
import Login from './page/Login';
import Cart from './page/Cart';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <BrowserRouter >
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/product"
            element={
              <Suspense fallback={<Loader />}>
                <ProductList />
              </Suspense>
            }
          />
          <Route
            path="/ProductDetails/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProductDetails />
              </Suspense>
            }
          />
          <Route
            path="/Rigister"
            element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/Introduct"
            element={
              <Suspense fallback={<Loader />}>
                <Introduct />
              </Suspense>
            }
          />
          <Route
            path="/Login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/Cart"
            element={
              <Suspense fallback={<Loader />}>
                <Cart />
              </Suspense>
            }
          />
        </Route>

      </Routes>
    </BrowserRouter >
  );
};

export default App;