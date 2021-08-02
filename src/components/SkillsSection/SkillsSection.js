import React from 'react';
import Skill from '../Skill/Skill';
import './SkillsSection.css'
import htmlimg from '../../assets/img/HTML5_logo_and_wordmark.svg';
import cssimg from '../../assets/img/CSS3_logo_and_wordmark.svg';
import jsimg from '../../assets/img/Javascript_badge.svg';



const SkillsSection = () => {
    return (
        <div className="">
              <div className="text-white" id="skills">
      <h1 className="text-center">SKILLS</h1>
      <div className="row text-center">
</div>

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


      </div>
     
      
    </div>
          
        </div>
    )
}

export default SkillsSection
