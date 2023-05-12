import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const NavBar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/")
    },2000)
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Market</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
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
            </li>
            <li>
              <span onClick={logoutUser}>Logout</span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
