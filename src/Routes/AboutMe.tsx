import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
`;

const Box = styled.div`
  background-image: url("http://placekitten.com/800/500");
  background-repeat: no-repeat;
  background-size: 110%;
  background-position: 0 0;
  /* transition: all 5s; */
  width: 500px;
  height: 300px;
  border: 1px solid red;
`;

const AboutMe = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const onMouseMoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (boxRef.current) {
      boxRef.current.style.backgroundPosition =
        -event.pageX / 10 + "px " + -event.pageY / 10 + "px";
    }
  };
  return (
    <Wrapper>
      <Box ref={boxRef} onMouseMove={onMouseMoveHandler} />
    </Wrapper>
  );
};

export default AboutMe;
