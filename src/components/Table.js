import React from 'react';
import styled from 'styled-components';

// Стилизованный компонент для таблицы
const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #1f1f1f; /* Темный цвет фона */
`;

// Стилизованный компонент для заголовков столбцов
const TableHeader = styled.th`
  background-color: #212121; /* Темно-серый цвет фона */
  color: #ffffff; /* Белый цвет текста */
  padding: 16px;
  text-align: left;
  font-weight: 600; /* Жирный шрифт */
`;

// Стилизованный компонент для ячеек таблицы
const TableCell = styled.td`
  border: 1px solid #383838; /* Темно-серый цвет рамки */
  padding: 16px;
  color: #ffffff; /* Белый цвет текста */
`;

// Функциональный компонент для отображения таблицы
const Table = ({ data }) => {
    return (
        <TableContainer>
            <thead>
            <tr>
                <TableHeader>Короткая ссылка</TableHeader>
                <TableHeader>Исходная ссылка</TableHeader>
                <TableHeader>Количество переходов</TableHeader>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <TableCell>{item.shortLink}</TableCell>
                    <TableCell>{item.originalLink}</TableCell>
                    <TableCell>{item.clicks}</TableCell>
                </tr>
            ))}
            </tbody>
        </TableContainer>
    );
};

export default Table;
