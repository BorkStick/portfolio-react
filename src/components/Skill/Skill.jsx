import React from 'react';

const Skill = ({title, description, img}) => {
    return (
      
        <div className="row text-center">
                <div className="col">
                <img src={img} height="100px" alt="image here" />
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
              </div>
    )
}

export default Skill;