import { useRef, useState } from "react";
import styled from "styled-components";
import TypingText from "../Components/TypingText";

const Wrapper = styled.div`
  /* background-color: red; */
`;
const Container = styled.div`
  height: calc(100vh - 260px);
  font-size: 30px;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const textArr = [
    "안녕하세요?",
    "프론트엔드 개발자",
    "정재연 입니다.",
    "Hello, everyone.",
    "My name is Jaeyeon Jeong.",
    "Grad to meet you. :)",
  ];
  return (
    <Wrapper>
      <Container>
        <TypingText text={textArr} fontSize="40px" />
      </Container>
    </Wrapper>
  );
};

export default Home;
