import { ReactNode, useRef } from "react";
import styled from "styled-components";
import Header from "../Components/Header";

const Background = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  padding: 60px 40px;
`;
const Wrapper = styled.div`
  background-color: white;
  background-image: url("https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80");
  background-repeat: no-repeat;
  background-position: center 30%;
  background-size: 103%;
  border-radius: 10px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px 60px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: all 2s;
  /* &:hover {
    background-position: center 50%;
  } */
`;
const Container = styled.div`
  z-index: 3;
  margin-top: 20px;
  height: 100%;
  /* border: 1px solid red; */
`;

const Layout = ({ children }: { children: ReactNode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const onMouseMoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transition = "all 0s";
      wrapperRef.current.style.backgroundPosition =
        -event.pageX / 40 + "px " + -event.pageY / 40 + "px";
    }
  };
  const onMouseLeaveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current) {
      wrapperRef.current.style.backgroundPosition = "center 30%";
      wrapperRef.current.style.transition = "all 5s";
    }
  };
  return (
    <Background>
      <Wrapper
        ref={wrapperRef}
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <Header />
        <Container>{children}</Container>
      </Wrapper>
    </Background>
  );
};

export default Layout;
