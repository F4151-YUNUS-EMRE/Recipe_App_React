import React from 'react';
import coding from "../../assets/coding.svg";
import github from "../../assets/GitHub-Mark-Light-120px-plus.png";
import { AboutContainer, InfoContainer, LogoContainer } from './About.style';
import linkedin from "../../assets/linkedin-svgrepo-com.svg";

const About = () => {
  return (
    <AboutContainer>
      <img src={coding} alt="" width="300px" />
      <h3>I'm Full Stack Developer</h3>
      <InfoContainer justify="space-evenly">
        <LogoContainer>
          <a href="https://github.com/F4151-YUNUS-EMRE" target="_blank">
            <img src={github} width="100px" />
          </a>
          <p>My Projects</p>
        </LogoContainer>
        <LogoContainer>
          <a
            href="https://www.linkedin.com/in/yunus-emre-ta%C5%9F%C3%A7%C4%B1-7357b9247/"
            target="_blank"
          >
            <img src={linkedin} width="100px" />
          </a>
          <p>My LinkedIn</p>
        </LogoContainer>
      </InfoContainer>
    </AboutContainer>
  );
}

export default About