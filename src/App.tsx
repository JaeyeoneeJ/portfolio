import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import AboutMe from "./Routes/AboutMe";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import Timeline from "./Routes/Timeline";

function App() {
  return (
    <BrowserRouter>
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
