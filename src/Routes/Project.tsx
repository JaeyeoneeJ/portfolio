import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IProjectData, projectData, projectState } from "../atoms";

const Ctn = styled.div`
  position: relative;
  overflow-y: auto;
  height: calc(100% - 73px);
  @media screen and (max-width: 1180px) {
    height: calc(100% - 53px);
  }
`;
const Wrapper = styled.div`
  overflow-y: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Card = styled.div`
  /* background-color: green; */
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    img {
      scale: 1.05;
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
    }
  }
`;
const ImgBox = styled.div`
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.gray.lighter};
`;
const Img = styled.img`
  transition: all 0.3s;
  aspect-ratio: 16/9;
  width: 100%;
  object-fit: cover;
  display: block;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;
const Textarea = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Text = styled.p<{ fontSize?: string }>`
  text-align: ${(props) => (props.fontSize ? "center" : "inherits")};
  color: ${(props) => (props.fontSize ? props.theme.pointColor : "inherits")};
  font-weight: ${(props) => (props.fontSize ? 600 : 400)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  @media screen and (max-width: 1180px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  }
`;

const projects = [
  {
    title: "개인 포트폴리오",
    src: "project_portfolio",
    description: "프론트엔드 개발자 포트폴리오 웹사이트 개발",
    overview:
      "프론트엔드 개발자로서의 첫 포트폴리오로 보드 느낌의 깔끔함을 메인 컨셉으로 잡고 작업한 프로젝트입니다.",
    duration: "2023.02 ~ 2023.02(1주)",
    isTeam: undefined,
    skillStack: ["typescript", "react", "vercel", "recoil"],
    link: {
      website: "https://portfolio-jaeyeoneej.vercel.app/",
      github: "https://github.com/JaeyeoneeJ/portfolio",
      youtube: undefined,
    },
  },
  {
    title: "NETFLIX CLONE",
    src: "project_netflixClone",
    description: "animate에 중점을 두고 넷플릭스를 클론한 프로젝트",
    overview:
      "animate에 중점을 두고 넷플릭스를 클론한 프로젝트로 'the movie DB'에서 data를 fetching하고 framer-motion 라이브러리를 사용하여 animation을 구현하였습니다.",
    duration: "2023.02 ~ 2023.02(2주)",
    isTeam: undefined,
    skillStack: ["typescript", "react", "vercel", "recoil", "framer-motion"],
    link: {
      website: "https://netflix-clone-jaeyeoneej.vercel.app/",
      github: "https://github.com/JaeyeoneeJ/NETFLIX-CLONE",
      youtube: undefined,
    },
  },
  {
    title: "Drag with To Do List",
    src: "project_dragWithToDoList",
    description: "Trello의 일부 기능을 클론한 프로젝트",
    overview:
      "react-beautiful-dnd 라이브러리를 사용하여 drag 기능에 중점을 둔 프로젝트로 drag로 보드를 넘나들고 앱 하단 휴지통에 Card를 이동하여 삭제하는 기능을 구현했습니다.",
    duration: "2023.01 ~ 2023.02(1주)",
    isTeam: undefined,
    skillStack: [
      "typescript",
      "react",
      "vercel",
      "recoil",
      "react-beautiful-dnd",
    ],
    link: {
      website: "https://trello-clone-eta-nine.vercel.app/",
      github: "https://github.com/JaeyeoneeJ/TO-DO-LIST-with-DRAG",
      youtube: undefined,
    },
  },
  {
    title: "떨면뭐하니",
    src: "project_dmmhn",
    description: "온라인 모의면접 제공 서비스",
    overview:
      "IT개발 분야 모의면접 서비스로 질문(텍스트)을 음성(보이스)으로 변환(text-to-speech)하여 AI 모의면접관이 직접 질문을 읽어주고, 각 질문의 소요시간을 측정하여 실제 면접처럼 긴장되는 모의면접을 체험할 수 있는 서비스입니다.",
    duration: "2022.11 ~ 2022.12(6주)",
    isTeam: {
      frontEnd: 3,
      backEnd: 4,
      designer: 1,
    },
    skillStack: [
      "typescript",
      "react",
      "axios",
      "recoil",
      "recordRTC",
      "AWS CloutFront, AWS S3",
      "CLOVA Voice",
    ],
    link: {
      website: "https://itterview.com/",
      github: "https://github.com/HH99-NO1/DMMHN-FE",
      youtube: "https://www.youtube.com/watch?v=aMmKTLddYnM",
    },
  },
  {
    title: "AIRBNB CLONE",
    src: "project_airbnbClone",
    description: "반응형 웹 구현에 중점을 두고 에어비앤비를 클론한 프로젝트",
    overview:
      "에어비앤비 클론코딩으로 미디어쿼리를 사용하여 반응형 웹을 구현하고 로그인/회원가입 기능, 숙소 Hosting/상세페이지 등에 중점을 둔 프로젝트입니다.",
    duration: "2022.11 ~ 2022.11(1주)",
    isTeam: {
      frontEnd: 2,
      backEnd: 3,
    },
    skillStack: ["javascript", "react", "vercel", "redux"],
    link: {
      website: "",
      github: "https://github.com/JaeyeoneeJ/DGBNB-FE",
      youtube: "https://www.youtube.com/watch?v=1brLZZskr3Q",
    },
  },
];

const Project = () => {
  const setIsClickedProject = useSetRecoilState(projectState);
  const setIsprojectData = useSetRecoilState(projectData);
  const onProjectView = (file: IProjectData) => {
    setIsClickedProject(true);
    setIsprojectData(file);
  };
  return (
    <Ctn>
      <Wrapper>
        {projects.map((project, index) => (
          <Card key={index} onClick={() => onProjectView(project)}>
            <ImgBox>
              <Img src={`img/projects/${project.src}.png`} alt="project-img" />
            </ImgBox>
            <Textarea>
              <Text fontSize="20px">{project.title}</Text>
              <Text>{project.description}</Text>
            </Textarea>
          </Card>
        ))}
      </Wrapper>
    </Ctn>
  );
};

export default Project;
