import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import { Button, Menu } from 'antd';
import { AppstoreOutlined, HomeOutlined, ShoppingCartOutlined, LogoutOutlined, EditOutlined, SettingOutlined, LoginOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';

const NavBar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [current, setCurrent] = useState('');

  const logoutUser = (event) => {
    event.preventDefault();
    logout();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const menuItems = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeOutlined />,
      link: '/',
    },
    {
      label: 'Market',
      key: 'market',
      icon: <ShoppingOutlined />,
      link: '/product',
    },
    {
      label: 'Cart',
      key: 'cart',
      icon: <ShoppingCartOutlined />,
      link: '/cart',
    },
    {
      label: 'Register',
      key: 'register',
      icon: <EditOutlined />,
      link: '/register',
      hideWhenLoggedIn: true, // Ocultar cuando el usuario está autenticado
    },
    {
      label: 'Login',
      key: 'login',
      icon: <LoginOutlined />,
      link: '/login',
      hideWhenLoggedIn: true, // Ocultar cuando el usuario está autenticado
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {menuItems.map((item) =>
          user && item.hideWhenLoggedIn ? null : (
            <Menu.Item key={item.key} icon={item.icon}>
              <Button type="link">
                <Link to={item.link}>{item.label}</Link>
              </Button>
            </Menu.Item>
          )
        )}
        {user && (
          <>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Button type="link">
                <Link to="/profile">Profile</Link>
              </Button>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
              <Button type="link" onClick={logoutUser}>
                Logout
              </Button>
            </Menu.Item>
          </>
        )}
      </Menu>
    </nav>
  );
};

export default NavBar;
