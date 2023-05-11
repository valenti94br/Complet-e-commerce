import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Product from './components/Products/Product';
import NavBar from './components/NavBar/NavBar';
import { GlobalProvider } from "./context/GlobalState";
import { UserProvider } from "./context/UserContext/UserState";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <GlobalProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </GlobalProvider>
      </UserProvider>
    </div>
  );
}

export default App;
