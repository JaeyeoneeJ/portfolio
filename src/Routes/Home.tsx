import { useRef, useState } from "react";
import styled from "styled-components";
import TypingText from "../Components/TypingText";

const Wrapper = styled.div``;
const Container = styled.div``;
const TextAbove = styled.p``;

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <TextAbove>타이핑해보자</TextAbove>
        <TypingText text="안녕하세요?" />
      </Container>
    </Wrapper>
  );
};

export default Home;
