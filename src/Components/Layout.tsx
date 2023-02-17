import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Components/Header";

const Background = styled.div`
  background-color: teal;
  width: 100vw;
  height: 100vh;
  padding: 60px 40px;
`;
const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px 60px;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const Container = styled.div`
  margin-top: 30px;
  border: 1px solid red;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Background>
      <Wrapper>
        <Header />
        <Container>{children}</Container>
      </Wrapper>
    </Background>
  );
};

export default Layout;
