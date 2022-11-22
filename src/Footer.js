import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/kateryna-komisarova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kateryna Komisarova
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/komisssarova/weather-app-react-2022"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://clever-marshmallow-432854.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
    </footer>
  );
};

export default Footer;
