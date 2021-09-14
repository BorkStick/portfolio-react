import React, { Component } from "react";
import "./Projects.css";
import data from "../../data/projects.json";
import {projects} from "../../data/projects.json";

export default class Projects extends Component {
  

  render() {
    const project = data.projects.find((p) => p.slug === this.props.slug);

    
    return (
      <div className="container">
       

        <div className="container pt-4">
          <h1 className="text-center">{project.title}</h1>
        </div>

        <div className="container py-2">
          <img
            src={project.image}
            alt=""
            width="100%"
          />
        </div>

        <div className="container d-grid gap-2">
          <a
            className="btn btn-dark"
            id="website-button"
            type="button"
            href={project.demo}
          >
            Live Demo
          </a>
          <a
            className="btn btn-secondary"
            id="github-button"
            type="button"
            href={project.code}
          >
            Code
          </a>
        </div>

        <div className="container py-4 text-center features">
          <h2>About Project</h2>
          <p>{project.description}</p>
        </div>

       
       
        <div className="container pb-4 text-center">
          <h3>Notable Features</h3>
          <ul >
          
              <li className="list-unstyled">
                {project.features}
              </li>
           
         
          </ul>
        </div>

        
        <div className="container pb-5 text-center " id="tech-used">
          <h2>Tech Used</h2>
          <ul className="d-flex justify-content-center pt-2">
            <li>
              <p className="badge">
                HTML
              </p>
            </li>
            <li>
              <p className="badge">
                CSS
              </p>
            </li>
            <li>
              <p className="badge">
                Bootstrap
              </p>
            </li>
            <li>
              <p  className="badge">
                Git
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
