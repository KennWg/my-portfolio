import React from "react";

function Portfolio() {
    return (
        <div className="w-100">
            <h2 className="mx-5 my-2 mt-3">Portfolio</h2>
            <div className="d-flex flex-wrap mx-5 py-2 flex-row project-container">
                <a href="https://kennwg.github.io/no-fraud/" target="_blank" rel="noreferrer noopener" className="projectcard project1 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>No Fraud</h3>
                            <h4>HTML/CSS/Javascript</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">This was a collaborative project done with basic HTML, Javascript and CSS and involved API calls to a server-side API to see if a phone number was valid. </p>
                <a href="https://github.com/KennWg/no-fraud" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://sheltered-oasis-41495.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="projectcard project2 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Pet Buddies</h3>
                            <h4>Node.js, Express.js, MySQL, Handlebars.js</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">This was another collaborative project, the aim of which was to create a simple site where pet owners could create events for their pets to socialize.  It used Handlebars.js to help template, and stored user and post data using MySQL.</p>
                <a href="https://github.com/KennWg/run-buddy" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://aqueous-tor-23936.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="projectcard project3 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Pet Alert</h3>
                            <h4>MERN Stack</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">This project used the MERN stack to build a site where somebody could post reports for lost pets.  It also used Cloudinary to upload pictures of pets for the reports.</p>
                <a href="https://github.com/KennWg/pet-finder" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://fathomless-headland-58560.herokuapp.com" target="_blank" rel="noreferrer noopener" className="projectcard project4 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Budget Tracker</h3>
                            <h4>PWA, Service Workers, MongoDB</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">This project incorporated some offline capabilities into an app and converted it to a PWA.  It uses a service worker to cache the relevant files, and it saves transactions when offline and waits for connection to push it to the online database.</p>
                <a href="https://github.com/KennWg/budget-tracker" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://kennwg.github.io/sorting-app/" target="_blank" rel="noreferrer noopener" className="projectcard project5 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Sorting Visualizer</h3>
                            <h4>React, Javascript</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">I made a sorting visualizer using React and Javascript where you can see how 3 popular sorting algorithms work visually - there are buttons for merge sort, heap sort and quick sort.  Bubble sort is also available as a comparison. </p>
                <a href="https://github.com/KennWg/sorting-app" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://glacial-lake-35403.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="projectcard project6 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Tech Blog</h3>
                            <h4>MySQL, Express.js, Handlebars.js</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">I made a mock tech blog here, with a homepage that shows various posts that were made.  The project was good practice in following model-view-controller guidelines.</p>
                <a href="https://github.com/KennWg/tech_blog" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
        </div>
    );
};

export default Portfolio;