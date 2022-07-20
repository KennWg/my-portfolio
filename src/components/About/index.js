import React from "react";

function About(props) {

    const {aboutRef} = props;

    return (
        <div ref={aboutRef} className="w-50 aboutContainer text-center justify-content-center">
            <h2 className="mx-5 my-5 text-center">About Me</h2>
            <p className="mx-5 py-2">Hello, welcome to my portfolio!  I've filled the page with some projects I've done over the last year or so as I learned more technologies.  I graduated from the University of Toronto Mississauga with a BSc in forensic science and psychology and was working in the security systems field for a few years.  
            I decided recently that it's time for a change, and I enrolled in a bootcamp with the University of Toronto to pursue something I always had an interest in.
            The journey has been a lot of fun, and it really appeals to my desire to see projects take shape over time and my love of solving problems.
            </p>
            <p className="mx-5 py-2">
            Over the past while I got to learn about the basics of web development with HTML, CSS and Javascript and was able to get some experience doing some group projects with others in the bootcamp.
            Working with APIs on the back end and getting to learn about databases like SQL or NoSQL was also really interesting for me.  I watched a lot of tutorials lately and managed to build some fun side projects like the sorting and pathfinding visualizers.  I hope to do a lot more as time goes on! 
            </p>
        </div>
    );
};

export default About;