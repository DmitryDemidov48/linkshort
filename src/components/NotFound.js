import React from 'react';
import styled from 'styled-components';

// Стилизованный компонент для контейнера страницы 404
const NotFoundContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const NotFoundMessage = styled.p`
  font-size: 18px;
  color: #777;
`;

const NotFound = () => {
    return (
        <NotFoundContainer>
            <Title>Страница не найдена</Title>
            <NotFoundMessage>Извините, запрошенная страница не существует.</NotFoundMessage>
        </NotFoundContainer>
    );
};

export default NotFound;
