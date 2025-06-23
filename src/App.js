// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Internships from "./components/Internships";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello, I'm PAVAN SAI PURANAM</h1> */}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Internships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
