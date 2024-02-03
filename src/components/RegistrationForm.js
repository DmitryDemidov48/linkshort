import React, { useState } from 'react';
import styled from 'styled-components';
import { register } from '../utils/auth'; // Импорт функции регистрации из утилит

// Стилизованный компонент для формы регистрации
const RegistrationFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const RegistrationForm = () => {
    // Состояния для хранения значений полей формы
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Обработчик изменения значений в полях формы
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Вызов функции регистрации с данными из формы
            const response = await register(formData);
            console.log('Регистрация прошла успешно:', response);
            // Очистка значений полей формы после успешной регистрации
            setFormData({ username: '', email: '', password: '' });
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    };

    return (
        <RegistrationFormContainer>
            <Title>Регистрация</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder="Имя пользователя"
                    onChange={handleInputChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Электронная почта"
                    onChange={handleInputChange}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Пароль"
                    onChange={handleInputChange}
                    required
                />
                <Button type="submit">Зарегистрироваться</Button>
            </Form>
        </RegistrationFormContainer>
    );
};

export default RegistrationForm;
