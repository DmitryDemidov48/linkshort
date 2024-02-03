import React, { useState } from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import Table from "../components/Table";
import ShortenLinkForm from "../components/ShortenLinkForm";
import axios from 'axios'; // Импортируем Axios

// Стилизованный компонент для контейнера главной страницы
const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

// Стилизованный компонент для заголовка главной страницы
const HomeHeading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #007bff;
  text-align: center;
`;

const HomePage = () => {
    const [originalLink, setOriginalLink] = useState('');
    const [tableData, setTableData] = useState([]);

    const handleLinkChange = (e) => {
        setOriginalLink(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Отправляем запрос на сервер для создания короткой ссылки
            const response = await axios.post('/api/shorten', { originalLink });
            // Обновляем данные таблицы
            setTableData(response.data);
            // Сбрасываем значение поля для ввода длинной ссылки
            setOriginalLink('');
            console.log("Создание короткой ссылки для:", originalLink);
        } catch (error) {
            console.error("Ошибка при создании короткой ссылки:", error);
        }
    };

    return (
        <>
            <Header/>
            <HomeContainer>
                <HomeHeading>Добро пожаловать на наш сервис сокращения ссылок!</HomeHeading>
                <p>Здесь вы можете создать короткую ссылку для любой длинной ссылки.</p>
                <ShortenLinkForm
                    originalLink={originalLink}
                    handleLinkChange={handleLinkChange}
                    handleSubmit={handleSubmit}
                />
                <Table data={tableData} />
            </HomeContainer>
        </>
    );
};

export default HomePage;
