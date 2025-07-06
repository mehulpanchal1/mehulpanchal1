/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="section experience section" id="experience">
      <h2 className="section__title">Experience 💼</h2>
      <span className="section__subtitle">What I work as</span>

      <div className="exp__container container grid">
        <div className="exp__content">
          <div>
            <i className="uil uil-web-grid exp__icon"></i>
            <h3 className="exp__title">
              Software <br /> Engineer
            </h3>
          </div>

          <div>
            <span className="exp__comp">CELEBAL TECHNOLOGIES</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>

              <h3 className="exp__modal-title">
                Software Development Engineer <br /> July'22 - Currently
                Working🧑🏻‍💻
              </h3>
              <p className="exp__modal-description">
                Developed web applications using Next.js, React.js, and
                integrated REST APIs with Express and Node.js. Managed databases
                with PostgreSQL and MongoDB while ensuring clean, scalable code
                and efficient global state management. Performed unit testing
                with Jest and maintained the codebase on Azure DevOps, following
                a feature-wise deployment strategy.
              </p>

              {/* <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Developed web applications using Next.js and React.js.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">I create UI Interfaces.</p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    I create UX Element Interactions.
                  </p>
                </li>
              </ul>
               */}
              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Developed web applications using Next.js and React.js.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Created REST APIs with Express and Node.js.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Managed databases with PostgreSQL and MongoDB.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Ensured clean, scalable code architecture and efficient
                    global state management.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Performed unit testing using Jest to maintain code quality.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Maintained codebase on Azure DevOps with a feature-wise
                    deployment strategy.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="exp__content">
          <div>
            <i className="uil uil-arrow exp__icon"></i>
            <h3 className="exp__title">
              Software <br /> Developer <br /> Intern
            </h3>
          </div>

          <div>
            <span className="exp__comp">Wagar Education</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>

              <h3 className="exp__modal-title">
                Software Developer Intern <br /> October'21 - May'22
              </h3>
              <p className="exp__modal-description">
                Worked as an Intern at EXA AG for 5 months, contributing to the
                development of React.js components and backend APIs using
                Node.js and Express. Conducted technical research, wrote Jest
                test cases, and supported static website generation. Delivered
                quality work to clients and the company, ensuring efficient and
                reliable project outcomes.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Conducted technical research on assigned tasks to ensure
                    effective implementation.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Developed React.js components for project functionality and
                    UI.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Wrote test cases for React components using Jest to ensure
                    code reliability.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Developed GET API endpoints in Express and Node.js for
                    marketplace items, user lists, and product details.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Implemented static website generation for an informative
                    website.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
