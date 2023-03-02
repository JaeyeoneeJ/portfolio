import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { imgState, projectState } from "./atoms";
import Layout from "./Components/Layout";
import ProjectModal from "./Components/Project/ProjectModal";
import ImgModal from "./Components/Timeline/ImgModal";
import AboutMe from "./Routes/AboutMe";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import Timeline from "./Routes/Timeline";

function App() {
  const isClickedImg = useRecoilValue(imgState);
  const isClickedProject = useRecoilValue(projectState);

  useEffect(() => {
    location.replace("https://portfolio-nextjs-jaeyeoneej.vercel.app/");
  }, []);
  return (
    <BrowserRouter>
      {isClickedImg && <ImgModal />}
      {isClickedProject && <ProjectModal />}
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/project"} element={<Project />} />
          <Route path={"/timeline"} element={<Timeline />} />
          <Route path={"/about_me"} element={<AboutMe />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
