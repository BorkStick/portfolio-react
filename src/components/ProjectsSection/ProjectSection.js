import React from "react";
import "./ProjectSection.css";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <section>
      <div
        className="container-fluid text-center bg-dark text-white py-2"
        id="projects"
      >
        <h1 className="section-headline">PROJECTS</h1>
      </div>
      <div className="container py-5  ">
        <div className="row">
          <div className="card col">
          <Link className="text-center" to="/projects/succulent"> 
            <h1>Project 1</h1>
          </Link>
          </div>
          <div className="card col">
          <Link className="text-center" to="/projects/project-2"> 
            <h1>Project 2</h1>
          </Link>
          </div>
          <div className="card col">
          <Link className="text-center" to="/projects/project-3"> 
            <h1>Project 3</h1>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
