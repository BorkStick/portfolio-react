import React from 'react';
import './Project.css'

const Project = ({title, description, img}) => {
    return (
      
        <div className="row text-center" id="project">
                
                <img src={img} alt="image here" />
                <h5>{title}</h5>
                <p>{description}</p>
              
              </div>
    )
}

export default Project;