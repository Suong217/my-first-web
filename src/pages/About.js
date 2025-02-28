import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Exercitation duis excepteur esse ad. Esse aliquip nostrud ex aute in
          ipsum elit fugiat deserunt reprehenderit duis ex. Deserunt sunt tempor
          ut proident ut ut labore id eiusmod qui est. Sunt proident incididunt
          laboris sit reprehenderit dolore eiusmod minim quis. Quis aliqua Lorem
          ex eu. Nulla commodo officia Lorem et fugiat et Lorem non laborum aute
          nulla. Sit qui ipsum mollit voluptate laborum. Incididunt proident
          duis eu mollit elit ullamco. Anim officia sit amet tempor elit. Enim
          est laboris enim ea labore deserunt aliquip sunt sint. Exercitation
          Lorem consequat ipsum elit sint nulla pariatur quis. Minim eiusmod
          laboris nulla ipsum. Anim amet ut fugiat exercitation voluptate
          consectetur pariatur velit. Voluptate adipisicing ipsum nostrud id
          irure fugiat ipsum nostrud cillum esse ad nulla eu sit. Enim tempor
          enim incididunt fugiat consequat pariatur in incididunt. Dolore enim
          ea incididunt officia voluptate elit aliquip incididunt. Ipsum est
          ullamco fugiat mollit laboris cillum minim enim.
        </p>
      </div>
    </div>
  );
}

export default About;
