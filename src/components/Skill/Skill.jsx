import React from "react";

const Skill = ({ title, description, img }) => {
  return (
    <div className="row text-center">
      <div className="col">
        <img src={img} height="100px" alt="" />
        <h5 className="section-label">{title}</h5>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Skill;
