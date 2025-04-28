import React from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="logo">LEARNXP</div>
          <a href="#menu">MENU</a>
        </div>
        <div className="head">
          <h1>
            THE BEST WAY TO <br /> LEARN TO CODE
          </h1>
          <p>
            Courses designed by experts with real-world <br /> practice. Join
            our global community
          </p>
          <button>Start learning now!</button>
        </div>
      </div>
      <div className="crsdis">
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
          <p>Python Core</p>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
          <p>Python Core</p>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
          <p>Python Core</p>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
          <p>Python Core</p>
        </div>
      </div>
      <div className="navlinks">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/">COURSES</NavLink>
        <NavLink to="/">PROFILE</NavLink>
        <NavLink to="/">LOGIN</NavLink>
      </div>
    </>
  );
}

export default Hero;
