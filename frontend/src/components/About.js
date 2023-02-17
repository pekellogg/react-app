import React from "react";
import style from "./About.module.css";

const About = () => {

  return (
    <div className={style.about}>
      <p>This web application derives data from the Mars Photo API maintained by chrisccerami.</p>
      <p>Explore the <a href="https://github.com/chrisccerami/mars-photo-api">official repository</a>.</p>
    </div>
  );

};

export default About;