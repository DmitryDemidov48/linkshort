import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between; /* Равномерное распределение элементов по горизонтали */
  background-color: #000; /* Черный фон */
  color: #fff; /* Белый текст */
  padding: 20px; /* Внутренние отступы */
`;

// Создаем стилизованный компонент для названия сайта
const SiteName = styled.h2`
  margin: 0; /* Убираем внешние отступы */
`;

// Создаем стилизованный компонент для кнопки ссылки
const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent; /* Прозрачный фон */
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333; /* Темно-серый фон при наведении */
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <SiteName>Shorten Link Service</SiteName>
            <div>
                <ButtonLink to="/login">Login</ButtonLink>
                <ButtonLink to="/register">Register</ButtonLink>
            </div>
        </HeaderContainer>
    );
};

export default Header;
