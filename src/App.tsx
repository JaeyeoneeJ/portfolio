import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { imgState } from "./atoms";
import Layout from "./Components/Layout";
import ImgModal from "./Components/Timeline/ImgModal";
import AboutMe from "./Routes/AboutMe";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import Timeline from "./Routes/Timeline";

function App() {
  const isClickedImg = useRecoilValue(imgState);
  return (
    <BrowserRouter>
      {isClickedImg && <ImgModal />}
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
