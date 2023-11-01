import React,  { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message, img, imageSize }) => {

   useEffect(() => {
    // Select the element containing the text
    const textElement = document.querySelector(".p");
    
    // Get the text content and replace Enter/Return key presses with \n
    if (textElement) {
      textElement.textContent = textElement.textContent.replace(/\n/g, "\\n");
    }
  }, []);
  return (
    <Jumbotron
      id="leadership"
      className="m-0 min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5" style={{whiteSpace: 'pre-line'}}>
          <p className="lead">{message}</p>
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
