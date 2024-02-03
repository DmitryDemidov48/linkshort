import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Создаем стилизованный компонент для контейнера страницы регистрации
const RegistrationPageContainer = styled.div`
  max-width: 600px;
  margin: 50px auto 0; /* Отступ сверху 50px, центрирование по горизонтали */
  padding: 20px;
  background-color: #333; /* Темный цвет фона */
  color: #fff; /* Белый текст */
  border-radius: 8px;
`;

// Создаем стилизованный компонент для формы регистрации
const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Стилизованный компонент для полей ввода
const InputField = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #444; /* Темно-серый цвет */
  color: #fff;
  font-size: 16px;

  &::placeholder {
    color: #ccc; /* Серый цвет для плейсхолдера */
  }
`;

// Стилизованный компонент для кнопки
const SubmitButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff; /* Синий цвет */
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Темно-синий цвет при наведении */
  }
`;

// Создаем стилизованный компонент для кнопки "Назад на домашнюю страницу"
const BackButton = styled(Link)`
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  background-color: #dc3545; /* Красный цвет */
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px; /* Отступ сверху 10px */
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #c82333; /* Темно-красный цвет при наведении */
  }
`;

// Создаем функциональный компонент для страницы регистрации
const RegistrationPage = () => {
    return (
        <RegistrationPageContainer>

            <RegistrationForm>
                <h2>Регистрация</h2>
                <InputField type="text" placeholder="Имя" />
                <InputField type="email" placeholder="Email" />
                <InputField type="password" placeholder="Пароль" />
                <InputField type="password" placeholder="Подтвердите пароль" />
                <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
                <BackButton to="/">Назад</BackButton>
            </RegistrationForm>
        </RegistrationPageContainer>
    );
};

// Экспортируем компонент RegistrationPage для использования в других частях приложения
export default RegistrationPage;
