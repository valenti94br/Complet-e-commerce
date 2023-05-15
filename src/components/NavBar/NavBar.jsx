import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import { Avatar, Button } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const NavBar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = (event) => {
    event.preventDefault();
    logout();
    setTimeout(() => {
      navigate("/")
    },2000)
  };

  return (
    <nav>
        <Button type="link">
          <Link to="/">Home</Link>
        </Button>
        <Button type="link">
          <Link to="/product">Market</Link>
        </Button>
        {!user && (
          <>
            <Button type="link">
              <Link to="/register">Register</Link>
            </Button>
            <Button type="link">
              <Link to="/login">Login</Link>
            </Button>
          </>
        )}
        {user && (
          <>
            <Button type="link">
              <Link to="/profile">
                <Avatar
                  size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 80,
                    xxl: 100,
                  }}
                  icon={<AntDesignOutlined />}
                />
              </Link>
            </Button>
            <Button type="link">
              <Link to="/" onClick={logoutUser}>Logout</Link>
            </Button>
          </>
        )}
    </nav>
  );
};

export default NavBar;
