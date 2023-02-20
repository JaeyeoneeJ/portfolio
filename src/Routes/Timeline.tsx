import React, { useState } from "react";
import styled from "styled-components";
import Awards from "../Components/Timeline/Awards";
import TimelineContents from "../Components/Timeline/TimelineContents";
import Education from "../Components/Timeline/Education";

const Wrapper = styled.div`
  position: relative;
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

  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.theme.gray.darker};
    border-bottom: 3px solid ${(props) => props.theme.gray.darker};
  }
`;

const Svg = styled.svg`
  position: absolute;
  top: 25px;
  right: -35px;
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
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 756.2702 553.7702"
        width="100"
        height="80"
      >
        <g>
          <g id="layer1" display="inline" opacity="0.98" />
          <path
            id="path3310"
            d="m525.562744,507.21994l-396.111603,-370.074829l-0.257813,-0.294785l-0.181442,-0.324448l-0.105484,-0.343597l-0.029709,-0.3526l0.045898,-0.35112l0.121307,-0.339523l0.19632,-0.317398l0.271225,-0.284927l24.592514,0.326141l0.654816,-22.038147l24.592529,0.326111l0.654785,-22.038116l24.592545,0.326111l0.6548,-22.037994l24.592545,0.325974l0.654785,-22.03796l0.328857,-0.23119l0.361954,-0.162621l0.383331,-0.094471l0.393356,-0.026691l0.3918,0.041222l0.378754,0.108582l0.353958,0.175987l0.317978,0.243153l396.111588,370.074795l0.257813,0.294891l0.18158,0.32431l0.105469,0.343658l0.029602,0.35257l-0.045837,0.351227l-0.121338,0.339417l-0.19635,0.317383l-0.27124,0.284973l-24.592529,-0.326111l-0.654785,22.038147l-24.592407,-0.326202l-0.654907,22.038147l-24.592529,-0.326111l-0.654785,22.038177l-24.59259,-0.326233l-0.654724,22.038116l-0.328918,0.23111l-0.361816,0.16272l-0.383423,0.094513l-0.393372,0.02655l-0.391785,-0.041107l-0.378662,-0.108765l-0.354065,-0.175964l-0.317993,-0.243073z"
            stroke-miterlimit="4"
            stroke-width="0.346"
            stroke="#000000"
            fill="#265d10"
          />
        </g>
      </Svg>
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
