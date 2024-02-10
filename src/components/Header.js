import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 20px;

  /* Медиа-запрос для планшетов */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  /* Медиа-запрос для мобильных устройств */
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const SiteName = styled.h2`
  margin: 0;
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  /* Медиа-запрос для мобильных устройств */
  @media screen and (max-width: 480px) {
    padding: 8px 16px;
  }
`;

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <SiteName>Shorten Link Service</SiteName>
                <div>
                    <ButtonLink to="/linkshort">Home</ButtonLink>
                    <ButtonLink to="/login">Login</ButtonLink>
                    <ButtonLink to="/register">Register</ButtonLink>
                </div>
            </HeaderContainer>
        </>
    );
};

export default Header;
