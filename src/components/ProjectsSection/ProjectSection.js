import React from 'react'
import './ProjectSection.css'
import Project from '../Project/Project'
import succulentimg from '../../assets/img/projects/succulent.png';
import tipimg from '../../assets/img/projects/tip-calculator.png';
import todoimg from '../../assets/img/projects/todo-list.gif';
import data from '../../data/data';




const ProjectSection = () => {
    return (
        <section>
        <div className="container-fluid text-center bg-dark text-white py-2" id="projects">
          <h1 className="section-headline">PROJECTS</h1>
          
        </div>
        <div className="container py-5  ">
          
          
          
          <div className="row">
            <div className="card col" >
                <Project 
                img={succulentimg}
                title="succulant"
                />
            </div>
            <div className="card col">
            <Project 
                img={tipimg}
                title="tip calculator"
                />
            </div>
            <div className="card col">
            <Project 
                img={todoimg}
                title="todo list"
                />
            </div>
          </div>

        </div>
      </section>
    )
}

export default ProjectSection
