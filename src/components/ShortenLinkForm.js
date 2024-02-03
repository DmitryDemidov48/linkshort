import React, { useState } from 'react';
import styled from 'styled-components';

// Стилизованный компонент для формы создания короткой ссылки
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

// Стилизованный компонент для поля ввода ссылки
const LinkInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 18px;
  margin-right: 10px;
  outline: none;
`;

// Стилизованный компонент для кнопки создания короткой ссылки
const ShortenButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ShortenLinkForm = ({ onShorten }) => {
    const [originalLink, setOriginalLink] = useState('');

    const handleLinkChange = (e) => {
        setOriginalLink(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Отправляем запрос к API для создания короткой ссылки
            const response = await fetch('/api/shorten-link', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ originalLink }),
            });
            if (response.ok) {
                const data = await response.json();
                onShorten(data.shortLink);
                console.log('Создана короткая ссылка:', data.shortLink);
            } else {
                console.error('Ошибка при создании короткой ссылки');
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error.message);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <LinkInput
                type="text"
                placeholder="Введите длинную ссылку"
                value={originalLink}
                onChange={handleLinkChange}
            />
            <ShortenButton type="submit">Создать короткую ссылку</ShortenButton>
        </FormContainer>
    );
};

export default ShortenLinkForm;
