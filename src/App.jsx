import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import About from "./pages/About";
import P1 from "./components/chakraPlayground/P1";
import Heror from "./pages/Heror";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <Heror />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </ChakraProvider>
    </>
  );
}

export default App;
