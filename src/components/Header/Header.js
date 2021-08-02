import React from 'react'


const Header = () => {
    return (
        <div>
    
    <nav class="navbar navbar-expand-lg  sticky-top" id="top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://borkstick.github.io/html-resume/">CV</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/borkstick">Github</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </div>
    )
}

export default Header