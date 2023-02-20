import React from "react";
import styled from "styled-components";
import { AiFillTrophy, AiFillBulb } from "react-icons/ai";

const Wrapper = styled.div`
  overflow-y: auto;
  height: calc(100% - 105px);
`;
const Wrapper2 = styled.div`
  height: 100%;
`;
const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.gray.lighter};
  /* border: 1px solid black; */
  &:last-child {
    border-bottom: none;
  }
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Duration = styled.p`
  width: 145px;
  text-align: center;
  background-color: ${(props) => props.theme.gray.lighter};
  border-radius: 5px;
  padding: 2px 6px;
  color: tomato;
  height: 20px;
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
  height: 20px;
`;
const Category = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* background-color: red; */
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

const awards = [
  {
    category: "activity",
    duration: "2017.08 ~ 2017.12",
    experience: "디자인융합벤처창업학교 청년창업팀 선정",
    subject: "공모전 모음 플랫폼 - 콘테스트크루",
    host: "한국디자인진흥원",
  },
  {
    category: "activity",
    duration: "2016.11",
    experience: "추계 학술대회 감성소재부품 심포지엄 세션 발표",
    subject: "한지의 재발견 - 캘리스톤",
    host: "대한금속재료공학회",
  },
  {
    category: "activity",
    duration: "2016.05 ~ 2016.11",
    experience: "한지 상품개발 공모전 최종선정",
    subject: "한지 신소재 개발 - 캘리스톤",
    host: "한국공예디자인문화진흥원",
  },
  {
    category: "award",
    duration: "2016.11",
    experience: "구미시 공공디자인 공모전 입선 수상",
    subject: "사고율을 줄이기 위한 중앙분리대 디자인 - Tracer",
    host: "경북 구미시",
  },
  {
    category: "award",
    duration: "2015.10",
    experience: "캡스톤디자인 경진대회 우수상",
    subject: "인지적 사용성을 고려한 전기 콘센트의 공학적 설계",
    host: "대한인간공학회",
  },
  {
    category: "award",
    duration: "2015.10",
    experience: "구미시 공공디자인 공모전 동상 수상",
    subject: "교통량을 반영한 육교 디자인 - Mobius Strip",
    host: "경북 구미시",
  },
  {
    category: "award",
    duration: "2015.10",
    experience: "어린이디자인대상 동상 수상",
    subject: "함께 자라는 가구 - O'Tree",
    host: "대한민국어린이디자인대상",
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
      <Wrapper2>
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
          awards.map((award, index) => (
            <Card key={index}>
              <FlexCol>
                <Duration>{award.duration}</Duration>
                <Category>
                  {award.category === "award" ? (
                    <AiFillTrophy size={18} color="#ffb004" />
                  ) : (
                    <AiFillBulb size={18} color="#efe702" />
                  )}
                </Category>
              </FlexCol>
              <Explain>
                <Experience>{award.experience}</Experience>
                <UnderLine>
                  <BorderBoxContent color="#fcf29b">
                    {award.subject}
                  </BorderBoxContent>
                  <BorderBoxContent color="#d0e4a7">
                    {award.host}
                  </BorderBoxContent>
                </UnderLine>
              </Explain>
            </Card>
          ))}
      </Wrapper2>
    </Wrapper>
  );
};

export default TimelineContents;
