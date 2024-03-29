import React from "react";
import Skill from "../Skill/Skill";
import "./SkillsSection.css";
import htmlimg from "../../assets/images/tylor in front of rack 2023.jpg";
import cssimg from "../../assets/images/tylor in front of rack 2023.jpg";
import jsimg from "../../assets/images/tylor in front of rack 2023.jpg";
import { skills } from "../../data/skills.json";

const SkillsSection = () => {
  return (
    <div className="">
      <div className="text-white" id="skills">
        <h1 className="text-center section-headline">SKILLS</h1>
        <div className="row text-center"></div>

        <div className="row text-center">
          <div className="col">
            <Skill
              title="HTML"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              img={htmlimg}
            />
          </div>
          <div className="col">
            <Skill
              title="CSS"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              img={cssimg}
            />
          </div>

          <div className="col">
            <Skill
              title="JavaScript"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              img={jsimg}
            />
          </div>

          <div>
            {skills.map((data, key) => {
              return (
                <div key={key}>
                  <img src={data.image} alt="" />

                  <h3>{data.title}</h3>

                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
