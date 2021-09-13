import React from "react";
import test from "../../assets/img/borkstick300.gif";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <section>
        <div class="container py-5 text-center" id="name">
          <h1 className="primary-headline">TYLOR WURZ</h1>
          <h3 className="section-headline">Full-Stack Web Developer</h3>
        </div>
        <div class="container-fluid" id="home">
          <div class="row">
            <img src={test} alt="" class="col" id="hero-img" />
            <p class="col">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              quisquam sit quo? Rem, reiciendis officia natus animi, esse, sunt
              quidem eos est adipisci tenetur quaerat repellat ipsa enim qui
              ratione? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti nihil ratione nisi excepturi animi culpa adipisci
              tempora. Optio et consequuntur labore, excepturi laborum,
              exercitationem repudiandae impedit, maxime repellat molestiae
              tempora.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
