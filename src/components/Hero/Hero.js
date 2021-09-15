import React from "react";
import test from "../../assets/img/borkstick300.gif";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <section>
        <div className="container py-5 text-center" id="name">
          <h1 className="primary-headline">TYLOR WURZ</h1>
          <h3 className="section-headline">Full-Stack Developer | WordPress Expert</h3>
        </div>
        <div className="container-fluid" id="home">
          <div className="row">
            <img src={test} alt="" className="col" id="hero-img" />
            <p className="col">
              My name is Tylor For people that know me, I am the goto
              computer guy. I gained my love for WordPress working as Technical
              Support for WP Engine. I am always happy to help no matter the
              technical problem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
