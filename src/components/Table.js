import React from 'react';
import styled from 'styled-components';

// Стилизованный компонент для таблицы
const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #595858; /* Черный цвет фона */
  border: 1px solid #fff; /* Белый цвет рамки */
`;

// Стилизованный компонент для заголовков столбцов
const TableHeader = styled.th`
  background-color: #000; /* Черный цвет фона */
  color: #fff; /* Белый цвет текста */
  padding: 16px;
  text-align: left;
  font-weight: 600; /* Жирный шрифт */
  border: 1px solid #fff; /* Белый цвет рамки */
`;

// Стилизованный компонент для ячеек таблицы
const TableCell = styled.td`
  border: 1px solid #fff; /* Белый цвет рамки */
  padding: 16px;
  color: #fff; /* Белый цвет текста */
`;

// Стилизованный компонент для ссылки "Перейти"
const StyledLink = styled.a`
  color: #fff; /* Белый цвет текста */
  text-decoration: none; /* Убираем подчеркивание */
  background-color: #2929d9; /* Синий цвет фона */
  padding: 8px 16px;
  border-radius: 8px; /* Закругленные углы */
  transition: background-color 0.3s ease;
  border: 1px solid #4f4d4d; /* Черный бордер */

  &:hover {
    background-color: #354cd2; /* Темно-синий цвет фона при наведении */
  }
`;

// Компонент для отображения таблицы
const Table = ({ data }) => {
    // Проверяем, есть ли данные и являются ли они массивом
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p>Нет данных для отображения</p>;
    }

    return (
        <TableContainer>
            <thead>
            <tr>
                <TableHeader>Короткая ссылка</TableHeader>
                <TableHeader>Действие</TableHeader>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <TableCell>{item.shortLink}</TableCell>
                    <TableCell>
                        <StyledLink href={item.shortLink} target="_blank" rel="noopener noreferrer">
                            Перейти
                        </StyledLink>
                    </TableCell>
                </tr>
            ))}
            </tbody>
        </TableContainer>
    );
};

export default Table;
