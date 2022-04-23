import React from "react"
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Contact from "./pages/contact/Contact";
import AdminAbout from "./admin/About/About";
import AdminSkill from "./admin/Skill/Skill";
import AdminProjects from "./admin/Projects/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Skill from "./pages/Skill/Skill";
import Projects from "./pages/Projects/Projects";
import Login from "./pages/Login/login";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path={`${process.env.REACT_APP_ADMIN}`} element={<Login />} />
            <Route path={`${process.env.REACT_APP_ADMIN}about`} element={<AdminAbout />} />
            <Route path={`${process.env.REACT_APP_ADMIN}skills`} element={<AdminSkill />} />
            <Route path={`${process.env.REACT_APP_ADMIN}projects`} element={<AdminProjects />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Contact />
        </AnimatePresence>
      </BrowserRouter>

    </>
  );
}

export default App;
