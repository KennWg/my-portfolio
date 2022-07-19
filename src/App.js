import React, { useState } from "react";
import Header from './components/Header';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const categories = ['about', 'portfolio', 'contact', 'resume'];

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Header currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <h1 className="text-center mt-5">Kenneth Wong</h1>
      <p className="text-center">Welcome to my portfolio.  I'm a new developer passionate about exploring new technologies and projects.  Want to see some of my projects?</p>
      <main>
        <Portfolio></Portfolio>
        <About></About>
        <Resume></Resume>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
