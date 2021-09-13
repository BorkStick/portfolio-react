import React, { Component } from "react";
// import "./Projects.css";
import data from "../../data/projects.json";

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const project = data.projects.find((p) => p.slug === this.props.slug);

    return (
      <div classNameName="container">
       

        <div className="container">
          {/* <h1>{project.title}</h1> */}
        </div>

        <div className="container py-2">
          <img
            // src={project.image}
            alt=""
            srcset=""
            width="100%"
          />
        </div>

        <div className="container d-grid gap-2">
          <a
            className="btn btn-dark"
            id="website-button"
            type="button"
            // href={project.demo}
          >
            Live Demo
          </a>
          <a
            className="btn btn-secondary"
            id="github-button"
            type="button"
            // href={project.code}
          >
            Code
          </a>
        </div>

        <div className="container pb-4">
          <h2>About Project</h2>
          {/* <p>{project.description}</p> */}
        </div>

        <div className="container pb-4">
          <h3>Role</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
            dicta?
          </p>
        </div>
        <div className="container pb-4">
          <h3>Project Difficulties</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
            dicta?
          </p>
        </div>
        <div className="container pb-4">
          <h3>Solution</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
            dicta?
          </p>
        </div>
        <div className="container pb-4">
          <h3>Notable Features</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>Responsive</li>
            <li>Lightbox Gallery</li>
          </ul>
        </div>

        
        <div className="container pb-5 text-center " id="tech-used">
          <h2>Tech Used</h2>
          <ul className="d-flex justify-content-center pt-2">
            <li>
              <a href="" className="badge">
                HTML
              </a>
            </li>
            <li>
              <a href="" className="badge">
                CSS
              </a>
            </li>
            <li>
              <a href="" className="badge">
                Bootstrap
              </a>
            </li>
            <li>
              <a href="" className="badge">
                Git
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
