import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Footer = () => {
    return (
      <footer>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/kateryna-komisarova/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/komisssarova/new-project">
            <FaGithub />
          </a>
          <a href="https://astonishing-heliotrope-50618a.netlify.app/">
            <SiNetlify />
          </a>
        </div>
      </footer>
    );
};

export default Footer
