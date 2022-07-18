import React from "react";

function Resume() {
    return(
        <div className="resume px-2 py-2">
            <h2 className="px-2">Examples of technologies I've worked with:</h2>
            <ul>
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>REST APIs</li>
            </ul>
            <p className="px-2">You can find my resume <a href="https://docs.google.com/document/d/1OzUZpwAzAS1XdP_-BtsjA8USVGR4lIbX" target="_blank" rel="noreferrer noopener">here!</a></p>
        </div>
    );
};

export default Resume;