import React, { useState } from "react";
import styled from "styled-components";
import TimelineContents from "../Components/Timeline/TimelineContents";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;
const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 22px;
  margin-bottom: 30px;
`;
const MenuItem = styled.div<{ active: boolean }>`
  border-bottom: ${(props) =>
    props.active ? `3px solid ${props.theme.pointColor}` : "none"};
  color: ${(props) => (props.active ? props.theme.pointColor : "black")};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.theme.gray.darker};
    border-bottom: 3px solid ${(props) => props.theme.gray.darker};
  }
`;

const Timeline = () => {
  const [career, setCareer] = useState(true);
  const [awards, setAwards] = useState(false);
  const [education, setEducation] = useState(false);

  const onClickCareer = () => {
    setAwards(false);
    setEducation(false);
    setCareer(true);
  };
  const onClickAwards = () => {
    setEducation(false);
    setCareer(false);
    setAwards(true);
  };
  const onClickEducation = () => {
    setAwards(false);
    setCareer(false);
    setEducation(true);
  };

  return (
    <Wrapper>
      <MenuBar>
        <MenuItem active={career} onClick={onClickCareer}>
          CAREER
        </MenuItem>
        <MenuItem active={awards} onClick={onClickAwards}>
          AWARDS
        </MenuItem>
        <MenuItem active={education} onClick={onClickEducation}>
          EDUCATION
        </MenuItem>
      </MenuBar>
      <TimelineContents
        isCareer={career}
        isAwards={awards}
        isEducation={education}
      />
    </Wrapper>
  );
};

export default Timeline;
