
import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card } from 'antd';
import './Login.scss';

const Login = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (values) => {
    try {
      await login({ email: values.email, password: values.password });
      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <h2 className="login-title">Iniciar sesión</h2>
        <Form className="login-form" onFinish={handleSubmit}>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: '¡Por favor ingresa tu email!' }]}>
            <Input type="text" value={email} onChange={handleEmailChange} />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: '¡Por favor ingresa tu contraseña!' }]}
          >
            <Input.Password value={password} onChange={handlePasswordChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;














