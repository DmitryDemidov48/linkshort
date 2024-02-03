
import React from 'react';
import styled from 'styled-components';

// Создаем стилизованный компонент для футера
const FooterContainer = styled.footer`
  background-color: #333; // Цвет фона футера
  color: #fff; // Цвет текста футера
  padding: 20px; // Отступы внутри футера
  text-align: center; // Выравнивание текста по центру
`;

// Функциональный компонент для футера
const Footer = () => {
    return (
        // Рендерим стилизованный контейнер с текстом футера
        <FooterContainer>
            <p>&copy; 2024 Shorten Link Service</p>
        </FooterContainer>
    );
};

// Экспортируем компонент Footer для использования в других частях приложения
export default Footer;
