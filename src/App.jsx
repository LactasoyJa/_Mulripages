import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Calculator from "./pages/Calculator/Calculator";
import Animation from "./pages/Animation/Animation";

import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { fetchProducts } from './Data/products';

import "./App.css";
import Layout from "./layouts/Layout/Layout";
import Login from "./pages/Login/Login";
import Components from "./pages/Components/Components";

function App() {
  const [role, setRole] = useState('');
  const [token, setToken] = useState('');
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  if (token === '') {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className='app-container'>
        <HashRouter>
          <Routes>
            <Route element={<Layout products={products} carts={carts} setToken={setToken} />}>
              <Route path={'/'} element={<Home />} />
              <Route path={'/Home'} element={<Home />} />
              <Route path={'/Calculator'} element={<Calculator />} />
              <Route path={"/Animation"} element={<Animation />} />
              <Route path={"/Components"} element={<Components />} />
              <Route path={'/Todo'} element={<Todo />} />
              <Route path={'/Products'} element={<Products products={products} carts={carts} setCarts={setCarts} />} />
              <Route path={'/Carts'} element={<Carts carts={carts} setCarts={setCarts} />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
