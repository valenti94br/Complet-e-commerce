
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button } from 'antd';
import './Register.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (values) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        'http://localhost:8080/users/createUser',
        values,
        config
      );

      console.log('Usuario registrado exitosamente', response.data);
      navigate('/login');
    } catch (err) {
      console.error('Error al registrar el usuario', err.response.data);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="register-container">
      <Card className="register-card" title="Registro de usuarios">
        <Form onFinish={onSubmit}>
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
          >
            <Input value={name} onChange={onChange} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Por favor ingresa tu email' }]}
          >
            <Input type="email" value={email} onChange={onChange} />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
          >
            <Input.Password value={password} onChange={onChange} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
            >
              Registrarse
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;




