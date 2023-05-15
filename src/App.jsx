// Importamos las dependencias necesarias.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importamos los componentes de la aplicación.
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Product from './components/Products/Product';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart'; // Importamos el componente Cart

// Importamos los proveedores de contexto.
import { GlobalProvider } from "./context/GlobalState";
import { UserProvider } from "./context/UserContext/UserState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState"; // Corregimos el nombre del archivo

// Definimos la función principal de la aplicación.
function App() {
  return (
    <div className="App">
      <UserProvider>
        <GlobalProvider>
          <OrdersProvider> {/* Agregamos el OrdersProvider */}
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
            </Router>
          </OrdersProvider>
        </GlobalProvider>
      </UserProvider>
    </div>
  );
}

// Exportamos la aplicación.
export default App;
