import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { projectData, projectState } from "../../atoms";
import ProjectPortal from "./ProjectPortal";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { IoMdGlobe } from "react-icons/io";

// 모달 배경화면
const Overlay = styled(motion.div)`
  position: fixed;
  /* z-index: 6; */
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

// 모달 닫기 버튼
const CloseBtn = styled.div`
  /* z-index: 1; */
  position: absolute;
  display: flex;
  top: 12px;
  right: 12px;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: rotate(-90deg);
    svg {
      color: ${(props) => props.theme.pointColor};
    }
  }
`;

// 모달 위치 고정
const Ctn = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  min-width: 300px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;
const ModalBox = styled.div`
  /* height: 200vh; */
  /* overflow-y: auto; */

  margin: 20px;
  border: 1px solid red;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const GradientBox = styled.div`
  display: inline-block;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 80%,
      rgba(255, 255, 255, 1) 100%
    ); /* W3C */
  }
`;

const Img = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: auto;
  display: block;
`;

const Contents = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  top: -90px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const HeaderCenter = styled(Header)`
  align-items: center;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
`;

const Duration = styled.p`
  border-radius: 5px;
  background-color: rgba(252, 242, 155, 1);
  padding: 2px 6px;
  color: gray;
`;

const Text = styled.p<{ fontSize?: string }>`
  font-weight: ${(props) => (props.fontSize ? 400 : 300)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
`;

const TeamArea = styled(Header)`
  justify-content: left;
  gap: 5px;
`;
const LinkArea = styled(TeamArea)``;

const LinkIcon = styled.a<{ tag: string }>`
  cursor: pointer;
  svg {
    color: gray;
    transition: all 0.2s;
  }
  &:hover svg {
    color: ${(props) =>
      props.tag === "website"
        ? "#66D3FA"
        : props.tag === "github"
        ? "black"
        : "#ff0000"};
    scale: 1.1;
    transform: translateY(-5px);
  }
`;

const IsTeam = styled(Duration)<{ isTeam: boolean }>`
  color: black;
  background-color: ${(props) => (props.isTeam ? "#66D3FA" : "#ffa07a")};
`;

const TeamPosition = styled(Duration)<{ position: string }>`
  background-color: ${(props) =>
    props.position === "frontEnd"
      ? "#fcf29b"
      : props.position === "backEnd"
      ? "#d0e4a7"
      : "#fcd09b"};
`;

const ProjectModal = () => {
  const setIsClickedProject = useSetRecoilState(projectState);
  const [isprojectData, setIsprojectData] = useRecoilState(projectData);
  const initial = {
    title: "",
    src: "",
    description: "",
    overview: "",
    duration: "",
    link: {
      website: undefined,
      github: undefined,
      youtube: undefined,
    },
  };

  // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
  const modalRef = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setIsClickedProject(false);
    setIsprojectData(initial);
  };

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <ProjectPortal>
      <AnimatePresence>
        <Overlay exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <CloseBtn onClick={onClose}>
            <svg
              strokeWidth="3"
              color="white"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeWidth="3"
                d="M3,3 L21,21 M3,21 L21,3"
              ></path>
            </svg>
          </CloseBtn>
          <Ctn>
            <ModalBox ref={modalRef}>
              <GradientBox>
                <Img
                  src={`img/projects/${isprojectData.src}.png`}
                  alt="modal-img"
                />
              </GradientBox>
              <Contents>
                <Header>
                  <Title>{isprojectData.title}</Title>
                  <Duration>{isprojectData.duration}</Duration>
                </Header>
                <Text>{isprojectData.overview}</Text>
                <HeaderCenter>
                  <TeamArea>
                    {isprojectData.isTeam ? (
                      <>
                        <IsTeam isTeam={true}>팀 프로젝트</IsTeam>
                        {isprojectData.isTeam.frontEnd && (
                          <TeamPosition position="frontEnd">
                            FE: {isprojectData.isTeam.frontEnd}
                          </TeamPosition>
                        )}
                        {isprojectData.isTeam.backEnd && (
                          <TeamPosition position="backEnd">
                            BE: {isprojectData.isTeam.backEnd}
                          </TeamPosition>
                        )}
                        {isprojectData.isTeam.designer && (
                          <TeamPosition position="designer">
                            DE: {isprojectData.isTeam.designer}
                          </TeamPosition>
                        )}
                      </>
                    ) : (
                      <IsTeam isTeam={false}>개인 프로젝트</IsTeam>
                    )}
                  </TeamArea>
                  {isprojectData.link && (
                    <LinkArea>
                      {isprojectData.link.website && (
                        <LinkIcon
                          href={isprojectData.link.website}
                          tag="website"
                        >
                          <IoMdGlobe size={30} />
                        </LinkIcon>
                      )}
                      {isprojectData.link.github && (
                        <LinkIcon href={isprojectData.link.github} tag="github">
                          <AiFillGithub size={30} />
                        </LinkIcon>
                      )}
                      {isprojectData.link.youtube && (
                        <LinkIcon
                          href={isprojectData.link.github}
                          tag="youtube"
                        >
                          <AiFillYoutube size={30} />
                        </LinkIcon>
                      )}
                    </LinkArea>
                  )}
                </HeaderCenter>
              </Contents>
            </ModalBox>
          </Ctn>
        </Overlay>
      </AnimatePresence>
    </ProjectPortal>
  );
};

export default ProjectModal;
