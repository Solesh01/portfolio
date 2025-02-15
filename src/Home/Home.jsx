import { Component } from "react";
import resume from "../assets/resume.pdf";
import unityIcon from "../assets/icons/unity.png"

import cssIcon from "../assets/icons/css.png";
import htmlcon from "../assets/icons/html.png";
import expressIcon from "../assets/icons/expressjs.png";
import reactIcon from "../assets/icons/reactjs.png";
import bootstrapIcon from "../assets/icons/bootstrap.png";
import nodeIcon from "../assets/icons/nodejs.png";
import ejsIcon from "../assets/icons/ejs.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import npmIcon from "../assets/icons/npm.png";
import angularIcon from "../assets/icons/angular.png";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import cSharpImage from "../assets/icons/c-sharp-c.228x256.png"
// import expressSvg from "../assets/icons/express-js.svg";
// import mongodbSvg from "../assets/icons/mongodb.svg";
// import ejsSvg from "../assets/icons/ejs.svg";
// import angularSvg from "../assets/icons/angular.svg";
// import bootstrapSvg from "../assets/icons/bootstrap.svg";
// import tailwindcssSvg from "../assets/icons/tailwindcss.svg";
// import angularmatSvg from "../assets/icons/angularmat.svg";
import emailSvg from "../assets/icons/email.svg";
import myImage from "../assets/image.png";


import logo from "../assets/logo.png";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        {/* NAVBAR SECTION */}
        <nav className="navbar navbar-dark  nav-bg-color navbar-expand-md px-3">
          <a href="#home" className="navbar-brand fs-3 fw-bold">
            <img
              src={logo}
              alt=""
              style={{ width: "25px", paddingBottom: "5px" }}
            />{" "}
            Saran
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbar"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li> */}
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* MAIN SECTION */}
        <div className="head" id="home">
          <div className="container-fluid">
            <div className="row mx-auto">
              <div className="col-sm  pt-5">
                <h1 className="header fw-bolder">
                  I'm Soleswaran, Skilled in
                  <br />{" "}
                  <span style={{ color: "#A6B1E1" }}>
                    <Typewriter
                      words={[
                        "Game Developer",
                        "Game Programmer",
                        "Unity Programmer  ",
                      ]}
                      loop={100000000000}
                      cursor
                      cursorStyle="|"
                      typeSpeed={150}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <div className="py-5 resumemain" data-aos="fade-up">
                  <a
                    className="resume"
                    href="https://drive.google.com/file/d/1eUhKx4gVNPVuN4SkRDMqIqAdTqidroS2/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div className="col-sm text-center  pt-5 ">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <a
                    href="https://github.com/Solesh01"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-dark m-3 px-4">
                      <img src={githubIcon} style={{ width: "35px" }} alt="" />
                      Github
                    </button>
                  </a>
                </div>

                <br />
                <div data-aos="fade-right" data-aos-duration="1500">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/soleswaran-n-1763b0287"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-light m-3 px-3">
                      <img
                        src={linkedinIcon}
                        alt=""
                        style={{ width: "35px" }}
                      />
                      Linked In
                    </button>
                  </a>
                </div>

                <br />
                <div data-aos="fade-right" data-aos-duration="2000">
                  <a
                    href="mailto:soleswaran542@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-light m-3 px-4">
                      <img
                        src={emailSvg}
                        alt=""
                        style={{ width: "35px", paddingRight: "5px" }}
                      />
                      Email
                    </button>
                  </a>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT ME SECTION */}
        <div className="container-fluid" id="about">
          <div className="row part2 pb-5 pt-5 align-items-center">
            {" "}
            <h1
              className="text-center py-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              About me
            </h1>
            <div
              className="col-sm text-center  pt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {" "}
              <img
                src={myImage}
                className="img-fluid myImage w-75"
                alt=""
                srcSet=""
              />
            </div>
            <div
              className="col-sm text-center  pt-5"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="px-3 pt-3 intro">
              "As a Unity game developer, I have hands-on experience in creating engaging and optimized games, using C# to implement core game mechanics, AI, and player interactions. I am proficient in utilizing Unity's built-in tools, such as physics, lighting, and animations, as well as implementing custom systems like inventories, user interfaces, and procedural generation. My expertise extends to integrating third-party plugins, working with version control, and optimizing games for various platforms. I am focused on delivering high-quality,
              bug-free experiences that enhance player engagement and ensure smooth performance."
            
              </p>
            </div>
          </div>
        </div>
       
        {/* SKILLS SECTION */}
        <div id="skills" className="container-fluid skills">
          <h1 className="text-center py-3"  data-aos="fade-right"
              data-aos-duration="1000">Skills</h1>
          <div className="row">
            <div className="col-sm">
              <div id="skill-icon">
                <img
                  src={unityIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  />

                  <img
                   src={cSharpImage}
                 alt=""
                 data-aos="zoom-in"
                 data-aos-duration="1000"
                  />



              
                {/* <img
                  src={angularIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                />
                <img
                  src={reactIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1300"
                />
                <img
                  src={expressIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1400"
                />
                <img
                  src={mongodbIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <img
                  src={ejsIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1600"
                />
                <img
                  src={htmlcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1700"
                />
                <img
                  src={cssIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1800"
                />
                <img
                  src={bootstrapIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1900"
                />
                <img
                  src={npmIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                /> */}
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT SECTION */}
        <div className="container-fluid contact" id="contact">
          <h1 className="text-center py-3">Contact</h1>
          <div className="row ">
            <div className="col-sm">
              <p>
                <a href="tel:+91 6379710438">Phone:9345310530</a>
              </p>
              <p>
                <a href="mailto:saranmvdm@gmail.com">
                  Email:soleswuran542@gmail.com
                </a>
              </p>
            </div>
            <div className="col-sm">
              <p>
                <a
                  href="https://www.linkedin.com/in/soleswaran-n-1763b0287/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinIcon} alt="" />
                  Linkedin
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/Solesh01"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                  Github
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/s__o__l__e__s/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="" />
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/919345310530"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsappIcon} alt="" />
                  Whatsapp
                </a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm text-center">
              <h4>Soleswaran Codes</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
