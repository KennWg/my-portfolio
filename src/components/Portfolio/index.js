import React, { useState } from "react";
import Modal from "../Modal";

function Portfolio(props) {

    const {portfolioRef} = props;

    const [currentProject, setCurrentProject] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = (project) => {
        setCurrentProject(project);
        setModalOpen(!modalOpen);
    }

    return (
        <div className="w-100" ref={portfolioRef}>
            {modalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
            <h2 className="mx-5 my-5 text-center">Portfolio</h2>
            <div className="d-flex flex-wrap portfolio-container justify-content-center">
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-md-5 col-10 justify-content-center">
                    <div className="projectcard project1 w-75" onClick={() => toggleModal({
                        name: "No Fraud",
                        techs: "HTML/CSS/Javascript",
                        description: "This was a collaborative project done with basic HTML, Javascript and CSS and involved API calls to a server-side API to see if a phone number was valid.",
                        index: "1",
                        projectLink: "https://kennwg.github.io/no-fraud/",
                        githubLink: "https://github.com/KennWg/no-fraud"
                    })}></div>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-md-5 col-10 justify-content-center">
                    <div className="projectcard project2 w-75" onClick={() => toggleModal({
                        name: "Pet Buddies",
                        techs: "Node.js, Express.js, MySQL, Handlebars.js",
                        description: "This was another collaborative project, the aim of which was to create a simple site where pet owners could create events for their pets to socialize.  It used Handlebars.js to help template, and stored user and post data using MySQL.",
                        index: "2",
                        projectLink: "https://sheltered-oasis-41495.herokuapp.com/",
                        githubLink: "https://github.com/KennWg/pet-buddies"
                    })}></div>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-md-5 col-10 justify-content-center">
                    <div className="projectcard project3 w-75" onClick={() => toggleModal({
                        name: "Pet Alert",
                        techs: "MERN Stack (MongoDb, Express.js, React, Node.js)",
                        description: "This project used the MERN stack to build a site where somebody could post reports for lost pets.  It also used Cloudinary to upload pictures of pets for the reports.",
                        index: "3",
                        projectLink: "https://aqueous-tor-23936.herokuapp.com/",
                        githubLink: "https://github.com/KennWg/pet-finder"
                    })}></div>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-md-5 col-10 justify-content-center">
                    <div className="projectcard project4 w-75" onClick={() => toggleModal({
                        name: "Pathfinder",
                        techs: "React, Javascript",
                        description: "I built a pathfinding visualizer using Dijkstra's algorithm to find the shortest path to a target.  I had a lot of fun figuring out how to get everything working for this one using React hooks.  The user can add walls, change the start and end points, and watch the algorithm run its course.  There's still a few changes I want to make to this when I have time, like adding more algorithms.",
                        index: "4",
                        projectLink: "https://kennwg.github.io/pathfinder/",
                        githubLink: "https://github.com/KennWg/pathfinder"
                    })}></div>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-md-5 col-10 justify-content-center">
                    <div className="projectcard project5 w-75" onClick={() => toggleModal({
                        name: "Sorting Visualizer",
                        techs: "React, Javascript",
                        description: "I made a sorting visualizer using React and Javascript where you can see how 3 popular sorting algorithms work visually - there are buttons for merge sort, heap sort and quick sort.  Bubble sort is also available as a comparison.",
                        index: "5",
                        projectLink: "https://kennwg.github.io/sorting-app/",
                        githubLink: "https://github.com/KennWg/sorting-app"
                    })}></div>
                </div>
                <div className="d-flex flex-wrap mx-1 py-3 project-container col-md-5 col-10 justify-content-center">
                    <div className="projectcard project6 w-75" onClick={() => toggleModal({
                        name: "Tech Blog",
                        techs: "MySQL, Express.js, Handlebars.js",
                        description: "I made a mock tech blog here, with a homepage that shows various posts that were made.  The project was good practice in following model-view-controller guidelines.",
                        index: "6",
                        projectLink: "https://glacial-lake-35403.herokuapp.com/",
                        githubLink: "https://github.com/KennWg/tech_blog"
                    })}></div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;