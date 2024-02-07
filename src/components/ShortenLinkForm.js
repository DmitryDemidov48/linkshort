import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Table from "./Table";

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
  border: 1px solid #383838; /* Темно-серый цвет рамки */
  border-radius: 6px;
  font-size: 18px;
  outline: none;
`;
const Button = styled.button`
  width: 30%;
  padding: 12px 20px;
  margin-top: 5px; /* Отступ сверху 5px */
  margin-left: 5px; /* Отступ слева 5px */
  background-color: #000; /* Черный цвет фона */
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333; /* Темно-серый цвет фона при наведении */
  }
`;


const ErrorMessage = styled.p`
  color: red;
`;

const ShortenLinkForm = () => {
    const [originalLink, setOriginalLink] = useState('');
    const [loading, setLoading] = useState(false);
    const [shortenedLink, setShortenedLink] = useState('');
    const [error, setError] = useState('');
    const [showTable, setShowTable] = useState(false);

    const handleLinkChange = (e) => {
        setOriginalLink(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const accessToken = '053083799f42e9532566bd687994bdf396800136';
            const longUrl = originalLink;

            const response = await axios.post('https://api-ssl.bitly.com/v4/shorten', {
                long_url: longUrl
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.link) {
                setShortenedLink(response.data.link);
                setShowTable(true);
                setOriginalLink('');
            } else {
                setError('Не удалось создать короткую ссылку');
            }
        } catch (error) {
            setError('Ошибка при создании короткой ссылки');
            console.error('Error creating shortened link:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Введите длинную ссылку"
                    value={originalLink}
                    onChange={handleLinkChange}
                />
                <Button type="submit" disabled={loading}>Создать короткую ссылку</Button>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </FormContainer>
            {showTable && <Table data={[{ originalLink, shortLink: shortenedLink }]}/>}
        </>
    );
};

export default ShortenLinkForm;
