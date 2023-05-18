// Importamos las dependencias necesarias.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.scss";

// Importamos los componentes de la aplicación.
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Product from './components/Products/Product';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

// Importamos los proveedores de contexto.
import { UserProvider } from "./context/UserContext/UserState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";

// Definimos la función principal de la aplicación.
function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductsProvider>
          <OrdersProvider>
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <Footer />
            </Router>
          </OrdersProvider>
        </ProductsProvider>
      </UserProvider>
    </div>
  );
}

// Exportamos la aplicación.
export default App;

