import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {SocialIcon} from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const starryNightStyles = {
  body: {
    background: `linear-gradient(180deg, #000033, #000000)`,
  },
  "body::before, body::after": {
    content: "'temp'",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  "body::before": {
    animation: "stars 10s infinite",
    background: "#fff",
    boxShadow: `
      15px 20px white,
      45px 90px white,
      70px 30px white,
      100px 60px white,
      130px 10px white,
      160px 80px white,
      180px 40px white,
      200px 100px white,
      220px 50px white,
      250px 20px white`,
    opacity: 0.6,
  },
};

const divStyle = {
  padding: '10px', // Add your desired padding values here
};

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={starryNightStyles.body}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                href={icon.url}
                style={divStyle}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <SocialIcon network={`${icon.image}`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutmed"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
