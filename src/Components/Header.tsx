import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  border: 1px solid red;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 80px;
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
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.theme.pointColor};
  border-radius: 5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const TitleArea = styled.div`
  /* min-width: 250px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  span:last-child {
    font-size: 30px;
    letter-spacing: 10px;
  }
`;
const LinkArea = styled.a`
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.gray.darker};
    transition: all 0.3s;
  }
  &:hover svg {
    color: ${(props) => props.theme.pointColor};
    scale: 1.1;
    transform: translateY(-5px);
  }
`;

const Header = () => {
  const homeMatch = useMatch("/");
  const projectMatch = useMatch("/project");
  const timelineMatch = useMatch("/timeline");
  const aboutMeMatch = useMatch("/about_me");
  return (
    <Wrapper>
      <FlexBox>
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
      <LinkArea href="https://github.com/jaeyeoneej">
        <FaGithub size={30} />
      </LinkArea>
    </Wrapper>
  );
};

export default Header;
