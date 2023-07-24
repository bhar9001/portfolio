import { useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import movie from "../../images/project/movie.png";
import car from "../../images/project/car.png";
import food from "../../images/project/food.png";
import maze from "../../images/project/maze.png";
import react from "../../images/project/react.svg";
import html from "../../images/project/html.svg";
import css from "../../images/project/css.svg";
import javas from "../../images/project/javas.svg";
import node from "../../images/project/node.svg";
import python from "../../images/project/python.svg";
import flask from "../../images/project/flask.svg";
import mongo from "../../images/project/mongo.svg";

const Project = () => {
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".animItem"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".project-wrapper"),
      start: "80px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  return (
    <section
      className="mb-16 md:pb-32 select-none"
      id="projects"
      ref={targetSection}
    >
      <div className="project-wrapper">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-sm md:text-md py-2 font-medium text-gray-300 animItem">
              PROJECT
            </h1>
            <h1 className="tracking-wide text-2xl md:text-4xl mb-4 font-bold nameAnimation2 animItem">
              My Projects
            </h1>
            <p className="leading-relaxed tracking-wider text-base md:text-lg font-medium text-gray-400 animItem">
              I have developed and contributed in some projects ranging from
              Front-end development <br /> Back-end development.
            </p>
          </div>
        </div>

        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center items-end space-y-6 md:justify-start md:items-end">
            <a
              href="https://github.com/bhar9001/my-movie-project"
              target="_blank"
              rel="noreferrer"
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110 link animItem"
            >
              <div className="nearme px-4 py-6 rounded-lg flex flex-col space-y-8 justify-center items-center ">
                <img
                  className="h-48 rounded object-cover object-center"
                  src={movie}
                  alt="content"
                />
                <h2 className="text-xl text-gray-100 font-medium title-font">
                  MOVIE RECOMMENDATION
                </h2>
                <div className="flex space-x-2">
                  <img src={python} alt="Python logo" />
                  <img src={flask} alt="Flask logo" />
                </div>
              </div>
            </a>
            <a
              href="https://admirable-meerkat-a14a26.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110 link animItem"
            >
              <div className="cryptinfo px-4 py-6 rounded-lg flex flex-col space-y-8  justify-center items-center">
                <img
                  className="h-48 rounded object-cover object-center"
                  src={car}
                  alt="content"
                />
                <h2 className="text-xl text-gray-100 font-medium title-font">
                  APNI CAR
                </h2>
                <div className="flex space-x-2">
                  <img src={react} alt="React logo" />
                  <img src={node} alt="Node logo" />
                  <img src={mongo} alt="MongoDB logo" />
                  {/* <img src={sass} alt="Sass logo" /> */}
                </div>
              </div>
            </a>
            <a
              href="https://omnifood-bharat.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110 link animItem"
            >
              <div className="spotify px-4 md:px-2 py-6 rounded-lg flex flex-col space-y-8 justify-center items-center">
                <img
                  className="h-44 md:h-48 rounded object-cover object-center"
                  src={food}
                  alt="content"
                />
                <h2 className="text-xl text-gray-100 font-medium title-font">
                  OMNIFOOD
                </h2>
                <div className="flex space-x-2">
                  <img src={html} alt="html logo" />
                  <img src={css} alt="css logo" />
                  <img src={javas} alt="Javascript logo" />
                </div>
              </div>
            </a>
            <a
              href="https://a-mazing-gamee.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110 link animItem"
            >
              <div className="dltlabs px-4 py-6 rounded-lg flex flex-col space-y-8 justify-center items-center">
                <img
                  className="h-48 rounded object-cover object-center"
                  src={maze}
                  alt="content"
                />
                <h2 className="text-xl text-gray-100 font-medium title-font">
                  A-MAZING GAME
                </h2>
                <div className="flex space-x-2">
                  <img src={react} alt="React logo" />
                  <img src={javas} alt="Javascript logo" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
