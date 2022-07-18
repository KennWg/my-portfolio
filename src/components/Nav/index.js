import React from "react";

function Nav(props) {
    const {
        currentCategory,
        setCurrentCategory
    } = props;

    const clickHandler = (section) => {
        setCurrentCategory(section);
    } 

    return(
        <nav className="w-100">
            <ul className="d-flex flex-row justify-content-end">
                <li className={`col-2 pt-2 ${currentCategory === 'about' && 'navActive'}`}><span onClick={() => clickHandler('about')}>About Me</span></li>
                <li className={`col-2 pt-2 ${currentCategory === 'portfolio' && 'navActive'}`}><span onClick={() => clickHandler('portfolio')}>Portfolio</span></li>
                <li className={`col-2 pt-2 ${currentCategory === 'contact' && 'navActive'}`}><span onClick={() => clickHandler('contact')}>Contact</span></li>
                <li className={`col-2 pt-2 ${currentCategory === 'resume' && 'navActive'}`}><span onClick={() => clickHandler('resume')}>Resume</span></li>
            </ul>
        </nav>
    )
};

export default Nav;