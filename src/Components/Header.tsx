import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";

const Position = styled.div`
  top: 80px;
  left: 0;
  right: 0;
  max-width: 1480px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.white.lighter};
`;

const FlexBox = styled.div<{ gap: string }>`
  display: flex;
  gap: ${(props) => props.gap};
`;

const MenuArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const MenuItem = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 300;
  position: relative;
  top: -5px;
  @media screen and (max-width: 1180px) {
    font-size: 14px;
  }
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #265d10;
  border-radius: 5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const TitleArea = styled.div`
  /* min-width: 250px; */
  color: #265d10;
  display: flex;
  flex-direction: column;
  align-items: center;
  span:last-child {
    font-size: 30px;
    letter-spacing: 10px;
  }
  @media screen and (max-width: 1180px) {
    font-size: 14px;
    span:last-child {
      font-size: 20px;
      letter-spacing: 6px;
    }
  }
`;
const LinkArea = styled.a<{ hoverColor: string }>`
  cursor: pointer;
  svg {
    color: white;
    transition: all 0.3s;
  }
  &:first-child:hover {
    transition: all 0.3s;
    transform: rotateZ(-15deg);
  }
  &:hover svg {
    color: ${(props) => props.hoverColor};
    scale: 1.1;
    transform: translateY(-5px);
  }
`;

const Header = () => {
  const homeMatch = useMatch("/");
  const projectMatch = useMatch("/project");
  const timelineMatch = useMatch("/timeline");
  const aboutMeMatch = useMatch("/about_me");
  const emailAddress = "5ikve@naver.com";
  const copyClipboard = (text: string) => {
    try {
      // 현재 작동하지 않음
      navigator.clipboard && console.log("가능!");
      navigator.clipboard.writeText(text);
      alert(`메일 주소 ${text}이 복사되었습니다.`);
    } catch (e) {
      alert("메일 주소 복사에 실패하였습니다.");
    }
  };
  return (
    <Position>
      <Wrapper>
        <FlexBox gap="80px">
          <Link to="/">
            <TitleArea>
              <span>jaeyeonee's</span>
              <span>PORTFOLIO</span>
            </TitleArea>
          </Link>
          <MenuArea>
            <MenuItem>
              <Link to="/">
                Home
                {homeMatch && <Circle layoutId="circle" />}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/project">
                Project
                {projectMatch && <Circle layoutId="circle" />}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/timeline">
                Timeline
                {timelineMatch && <Circle layoutId="circle" />}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about_me">
                About me
                {aboutMeMatch && <Circle layoutId="circle" />}
              </Link>
            </MenuItem>
          </MenuArea>
        </FlexBox>
        <FlexBox gap="10px">
          <LinkArea
            hoverColor="#0bb9f8"
            onClick={() => copyClipboard(emailAddress)}
          >
            <AiFillMail size={30} />
          </LinkArea>
          <LinkArea hoverColor="black" href="https://github.com/jaeyeoneej">
            <FaGithub size={30} />
          </LinkArea>
        </FlexBox>
      </Wrapper>
    </Position>
  );
};

export default React.memo(Header);
