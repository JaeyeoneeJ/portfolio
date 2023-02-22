import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TypingTextToTitle from "../Components/TypingTextToTitle";

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 30px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  height: calc(100% - 81px);
  @media screen and (max-width: 1180px) {
    height: calc(100% - 61px);
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-size: 18px;
`;

const ImgWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 80px;
`;

const Img = styled.img`
  width: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;
const AboutMe = () => {
  return (
    <Wrapper>
      <TypingTextToTitle
        text="사용자 중심의 디자인을 넘어"
        fontSize="30px"
        color="#265d10"
      />
      <TextArea>
        <Text>Front-End Developer 정재연 입니다. :)</Text>
        <Text>
          어렸을 때부터 그림 그리는 것을 좋아해 공과대학에 진학 후 독학으로
          디자인을 공부했습니다.
        </Text>
        <Text>
          고등학교, 대학교 친구들과 함께 한국디자인진흥원 주최의 창업공모전을
          신청하여 공모전 모음 웹 서비스인 "콘테스트크루"를 런칭하고
          운영하였습니다.
        </Text>
        <Text>
          사회적기업에 관심이 생겨 정책연구와 더불어 총 300여개의 기업을
          컨설팅하였지만 디자인에 대한 목마름에 사내 브랜딩 사업부를 만들어
          10개의 법인 로고와 워드프레스와 php를 기반으로 웹사이트를 구축한
          경험이 있습니다.
        </Text>
        <Text>
          평소 관심있던 디자인과 개발을 접목시켜 사용성이 뛰어난 웹 개발을
          구현하는 것에 관심이 높습니다.
        </Text>
        <Text>
          최근에는 서비스-유저 간 interaction에 관심이 생겨 UI/UX의 사용성
          관점에서 공부를 하고 있습니다.
        </Text>
      </TextArea>
      <ImgWrapper>
        <Img src="img/aboutMe/branding-1.png" alt="branding" />
        <Img src="img/aboutMe/branding-2.png" alt="branding" />
        <Img src="img/aboutMe/branding-3.png" alt="branding" />
        <Img src="img/aboutMe/branding-4.png" alt="branding" />
      </ImgWrapper>
      <TypingTextToTitle text="재미있는 거" fontSize="30px" color="#265d10" />
      <TextArea>
        <Text>Front-End Developer 정재연 입니다. :)</Text>
      </TextArea>
    </Wrapper>
  );
};

export default AboutMe;
