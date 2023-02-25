import React from "react";
import test from "../../assets/images/tylor in front of rack 2023.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <section>
        <div className="container py-5 text-center" id="name">
          <h1 className="primary-headline">TYLOR WURZ</h1>
          <h3 className="section-headline">
            Full-Stack Developer | WordPress Expert
          </h3>
        </div>
        <div className="container-fluid" id="home">
          <div className="row">
            <img src={test} alt="" className="col" id="hero-img" />
            <p className="col">
              Tylor is a tech-savvy individual with a passion for all things
              computers. He has always had a knack for tinkering with
              electronics and software, and over time he has developed a keen
              understanding of computer systems. With his expertise in
              programming and web development, he has created numerous websites
              and applications, showcasing his creativity and technical skills.
              Tylor's interest in artificial intelligence has led him to
              experiment with various machine learning models, and he has even
              trained a computer to write this very paragraph. As a result of
              his dedication and hard work, Tylor has become a proficient
              computer user, able to solve complex problems with ease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
