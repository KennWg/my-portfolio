import React from "react";
import Nav from "../Nav";

function Header(props) {
    const {
        currentCategory,
        setCurrentCategory,
        portfolioRef,
        aboutRef,
        contactRef,
        handleScroll
    } = props;

    return (
        <header className="d-flex flex-row px-3 py-3 flex-wrap">
            <div className="d-flex col-12 col-lg-3">
                <h1>Kenneth Wong</h1>
            </div>
            <div className="d-flex col-12 col-lg-9">
                <Nav
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                    handleScroll={handleScroll}
                    portfolioRef={portfolioRef}
                    aboutRef={aboutRef}
                    contactRef={contactRef}
                ></Nav>
            </div>
        </header>
    );
};

export default Header;