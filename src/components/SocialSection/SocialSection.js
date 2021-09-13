import React from "react";
import "./SocialSection.css";

const SocialSection = () => {
  return (
    <div className="">
      <section>
        <div className="text-center" id="social">
          <h1 className="">Social</h1>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              {/* <!-- github --> */}
              <a href="https://github.com/borkstick" className="bi bi-github">
                github
              </a>
            </li>
            <li className="nav-item">
              {/* <!-- linkedin --> */}
              <a
                href="https://www.linkedin.com/in/tylor-wurz-9a5bab20/"
                className="bi bi-linkedin"
              >
                linkedin
              </a>
            </li>
            <li className="nav-item">
              {/* <!-- instagram --> */}
              <a
                href="https://www.instagram.com/tylorwurz/"
                className="bi bi-instagram"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SocialSection;
