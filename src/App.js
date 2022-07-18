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
      <main>
        {currentCategory==='about' && 
        <About></About>}
        {currentCategory==='portfolio' && 
        <Portfolio></Portfolio>}
        {currentCategory==='contact' && 
        <ContactForm></ContactForm>}
        {currentCategory==='resume' && 
        <Resume></Resume>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
