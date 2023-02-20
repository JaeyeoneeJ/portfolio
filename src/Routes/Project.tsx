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
  },
  {
    title: "NETFLIX CLONE",
    src: "project_netflixClone",
    description: "animate에 중점을 두고 넷플릭스를 클론한 프로젝트",
  },
  {
    title: "Drag with To Do List",
    src: "project_dragWithToDoList",
    description: "Trello의 일부 기능을 클론한 프로젝트",
  },
  {
    title: "떨면뭐하니",
    src: "project_dmmhn",
    description: "온라인 모의면접 제공 서비스",
  },
  {
    title: "AIRBNB CLONE",
    src: "project_airbnbClone",
    description: "반응형 웹 구현에 중점을 두고 에어비앤비를 클론한 프로젝트",
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
