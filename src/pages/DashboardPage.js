// Импортируем React и компоненты из библиотеки styled-components
import React from 'react';
import styled from 'styled-components';

// Создаем стилизованный компонент для контейнера страницы "Панель управления"
const DashboardPageContainer = styled.div`
  max-width: 800px; // Максимальная ширина контейнера страницы
  margin: 0 auto; // Центрирование контейнера по горизонтали
  padding: 20px; // Отступы внутри контейнера
`;

// Создаем функциональный компонент для страницы "Панель управления"
const DashboardPage = () => {
    return (
        // Рендерим стилизованный контейнер страницы "Панель управления"
        <DashboardPageContainer>
            {/* Заголовок страницы */}
            <h2>Панель управления</h2>
            {/* Таблица для отображения статистики */}
            <table>
                <thead>
                <tr>
                    <th>Короткая ссылка</th>
                    <th>Исходная ссылка</th>
                    <th>Количество переходов</th>
                </tr>
                </thead>
                <tbody>
                {/* Здесь будут отображаться данные из базы о созданных коротких ссылках и их статистика */}
                </tbody>
            </table>
        </DashboardPageContainer>
    );
};

// Экспортируем компонент DashboardPage для использования в других частях приложения
export default DashboardPage;
