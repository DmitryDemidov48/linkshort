import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getDashboardData } from '../utils/api'; // Импорт функции получения данных для дашборда

// Стилизованный компонент для контейнера дашборда
const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
`;

const TableData = styled.td`
  padding: 10px;
`;

const Dashboard = () => {
    // Состояние для хранения данных дашборда
    const [dashboardData, setDashboardData] = useState([]);

    // Запрос данных для дашборда при загрузке компонента
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDashboardData();
                setDashboardData(data);
            } catch (error) {
                console.error('Ошибка при получении данных для дашборда:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <DashboardContainer>
            <Title>Дашборд</Title>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Короткая ссылка</TableHeader>
                        <TableHeader>Исходная ссылка</TableHeader>
                        <TableHeader>Количество переходов</TableHeader>
                    </TableRow>
                </TableHead>
                <tbody>
                {/* Маппинг данных для вывода в таблицу */}
                {dashboardData.map((item, index) => (
                    <TableRow key={index}>
                        <TableData>{item.shortLink}</TableData>
                        <TableData>{item.originalLink}</TableData>
                        <TableData>{item.clicks}</TableData>
                    </TableRow>
                ))}
                </tbody>
            </Table>
        </DashboardContainer>
    );
};

export default Dashboard;
