import Header from "../components/Header";
import ShortenLinkForm from "../components/ShortenLinkForm";
import styled from "styled-components";

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center; /* Выравнивание текста по центру */
`;

const HomeHeading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #111111; /* Белый цвет текста */
`;

const HomeParagraph = styled.p`
  color: #171616; /* Серый цвет текста */
  font-size: 16px;
  line-height: 1.5;
`;

const HomePage = () => {
    return (
        <>
            <Header/>
            <HomeContainer>
                <HomeHeading>Добро пожаловать на наш сервис сокращения ссылок!</HomeHeading>
                <HomeParagraph>Здесь вы можете создать короткую ссылку для любой длинной ссылки.</HomeParagraph>
                <ShortenLinkForm />
            </HomeContainer>
        </>
    );
};


export default HomePage;
