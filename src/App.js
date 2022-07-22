import React, { useState, useRef } from "react";
import Header from './components/Header';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const categories = ['portfolio', 'about', 'contact'];

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: (ref.offsetTop - 100),
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <Header currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        handleScroll={handleScroll}
        portfolioRef={portfolioRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      ></Header>
      <h1 className="text-center mt-5">Kenneth Wong</h1>
      <p className="text-center intro mx-5">Welcome to my portfolio.  I'm a new developer passionate about exploring new technologies and projects.  Want to see some of my projects?</p>
      <main>
        <Portfolio portfolioRef={portfolioRef}></Portfolio>
        <About aboutRef={aboutRef}></About>
        <Resume></Resume>
        <ContactForm contactRef={contactRef}></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
