import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 1px solid red; */
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;
const Card = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.gray.lighter};
  /* border: 1px solid black; */
  &:last-child {
    border-bottom: none;
  }
`;
const Duration = styled.p`
  width: 145px;
  text-align: center;
  background-color: ${(props) => props.theme.gray.lighter};
  border-radius: 5px;
  padding: 2px 6px;
  color: tomato;
  height: 100%;
`;
const Explain = styled.p`
  color: ${(props) => props.theme.black.lighter};
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 2px 6px;
`;
const Experience = styled.p`
  font-weight: 600;
`;
const UnderLine = styled.div`
  display: flex;
  gap: 5px;
`;
const BorderBoxContent = styled.p<{ color: string }>`
  background-color: ${(props) => props.color};
  width: auto;
  border-radius: 5px;
  padding: 2px 6px;
  color: gray;
  height: 100%;
`;

const careers = [
  {
    duration: "2020.05 ~ 2022.07",
    experience: "법인 설립 및 경영/브랜딩/마케팅 컨설팅",
    position: "대리",
    company: "다울사회적협동조합",
    location: "경기 오산시",
  },
  {
    duration: "2018.11 ~ 2020.03",
    experience: "법인 판로지원 및 도시/청년정책 연구",
    position: "연구원",
    company: "사회적협동조합 공동체세움",
    location: "충남 공주시",
  },
  {
    duration: "2017.08 ~ 2018.11",
    experience: "공모전 모음 플랫폼 '콘테스트크루' 웹서비스 런칭",
    position: "대표",
    company: "에프앤잇",
    location: "세종시",
  },
];

interface IProps {
  isCareer: boolean;
  isAwards: boolean;
  isEducation: boolean;
}

const TimelineContents = ({ isCareer, isAwards, isEducation }: IProps) => {
  return (
    <Wrapper>
      {isCareer &&
        careers.map((career, index) => (
          <Card key={index}>
            <Duration>{career.duration}</Duration>
            <Explain>
              <Experience>{career.experience}</Experience>
              <UnderLine>
                <BorderBoxContent color="#fcf29b">
                  {career.position}
                </BorderBoxContent>
                <BorderBoxContent color="#d0e4a7">
                  {career.company}
                </BorderBoxContent>
                <BorderBoxContent color="#fcd09b">
                  {career.location}
                </BorderBoxContent>
              </UnderLine>
            </Explain>
          </Card>
        ))}
      {isAwards &&
        careers.map((career, index) => (
          <Card key={index}>
            <Duration>{career.duration}</Duration>
            <Explain>
              <Experience>{career.experience}</Experience>
              <UnderLine>
                <BorderBoxContent color="#fcf29b">
                  {career.position}
                </BorderBoxContent>
                <BorderBoxContent color="#d0e4a7">
                  {career.company}
                </BorderBoxContent>
                <BorderBoxContent color="#fcd09b">
                  {career.location}
                </BorderBoxContent>
              </UnderLine>
            </Explain>
          </Card>
        ))}
    </Wrapper>
  );
};

export default TimelineContents;
