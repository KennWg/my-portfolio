import React from "react";

function Portfolio() {
    return (
        <div className="w-100">
            <h2 className="mx-5 my-5 text-center">Portfolio</h2>
            <div className="d-flex flex-wrap portfolio-container justify-content-center">
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-5 justify-content-center">
                    <a href="https://kennwg.github.io/no-fraud/" target="_blank" rel="noreferrer noopener" className="projectcard project1 w-75">
                    </a>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-5 justify-content-center">
                    <a href="https://sheltered-oasis-41495.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="projectcard project2 w-75">
                    </a>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-5 justify-content-center">
                    <a href="https://aqueous-tor-23936.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="projectcard project3 w-75">
                    </a>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-5 justify-content-center">
                    <a href="https://fathomless-headland-58560.herokuapp.com" target="_blank" rel="noreferrer noopener" className="projectcard project4 w-75">
                    </a>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-5 justify-content-center">
                    <a href="https://kennwg.github.io/sorting-app/" target="_blank" rel="noreferrer noopener" className="projectcard project5 w-75">
                    </a>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-5 justify-content-center">
                    <a href="https://glacial-lake-35403.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="projectcard project6 w-75">
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;