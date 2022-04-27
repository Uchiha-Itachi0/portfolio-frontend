import { React, lazy, Suspense } from "react"
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
  const About = lazy(() => import("./pages/About/About"));
  const Skill = lazy(() => import("./pages/Skill/Skill"));
  const Projects = lazy(() => import("./pages/Projects/Projects"));
  const Contact = lazy(() => import("./pages/contact/Contact"));
  const Login = lazy(() => import("./pages/Login/login"));
  const AdminAbout = lazy(() => import("./admin/About/About"));
  const AdminSkill = lazy(() => import("./admin/Skill/Skill"));
  const AdminProjects = lazy(() => import("./admin/Projects/Projects"));

  return (
    <>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            } />
            <Route path="/skill" element={
              <Suspense fallback={<Spinner />}>
                <Skill />
              </Suspense>
            } />
            <Route path="/projects" element={
              <Suspense fallback={<Spinner />}>
                <Projects />
              </Suspense>
            } />
            <Route path={`${process.env.REACT_APP_ADMIN}`} element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            } />
            <Route path={`${process.env.REACT_APP_ADMIN}about`} element={
              <Suspense fallback={<Spinner />}>
                <AdminAbout />
              </Suspense>
            } />
            <Route path={`${process.env.REACT_APP_ADMIN}skills`} element={
              <Suspense fallback={<Spinner />}>
                <AdminSkill />
              </Suspense>
            } />
            <Route path={`${process.env.REACT_APP_ADMIN}projects`} element={
              <Suspense fallback={<Spinner />}>
                <AdminProjects />
              </Suspense>
            } />
            <Route path="*" element={<Home />} />
          </Routes>
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        </AnimatePresence>
      </BrowserRouter>

    </>
  );
}

export default App;
