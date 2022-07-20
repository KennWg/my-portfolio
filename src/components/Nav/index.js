import React from "react";
import { usePagePosition } from "../../hooks";

function Nav(props) {
    const {
        currentCategory,
        setCurrentCategory,
        portfolioRef,
        aboutRef,
        contactRef,
        handleScroll
    } = props;

    const clickHandler = (section) => {
        setCurrentCategory(section);
        switch(section){
            case 'portfolio':
                handleScroll(portfolioRef.current);
                break;
            case 'about':
                handleScroll(aboutRef.current);
                break;
            case 'contact':
                handleScroll(contactRef.current);
                break;
        }
    }

    usePagePosition(setCurrentCategory,aboutRef,contactRef);

    return(
        <nav className="w-100">
            <ul className="d-flex flex-row justify-content-end">
                <li className={`col-2 pt-2 ${currentCategory === 'portfolio' && 'navActive'}`}><span onClick={() => clickHandler('portfolio')}>Portfolio</span></li>
                <li className={`col-2 pt-2 ${currentCategory === 'about' && 'navActive'}`}><span onClick={() => clickHandler('about')}>About Me</span></li>
                <li className={`col-2 pt-2 ${currentCategory === 'contact' && 'navActive'}`}><span onClick={() => clickHandler('contact')}>Contact</span></li>
            </ul>
        </nav>
    )
};

export default Nav;