import React, {useState} from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  // Divide the experiences into pairs of two
  const pairedExperiences = [];
  for (let i = 0; i < experiences.data.length; i += 2) {
    pairedExperiences.push(experiences.data.slice(i, i + 2));
  }

  const carouselNextButtonStyles = {
    backgroundColor: '#D6C6B7', // Change to your desired color
    color: '#625345',                 // Set the text color to contrast with the background
    // Add other styles as needed
  };

  // Custom CSS for Carousel next arrow button hover (optional)
  const carouselNextButtonHoverStyles = {
    backgroundColor: 'gray', // Change to your desired hover color
    // Add other hover styles as needed
  };

  return (
    <section className="section" id="experiences">
      <Jumbotron className="m-0 min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
        <Container>

          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row>
            <Col md={12}  className='text-center'>
              <Carousel className="mx-auto">
                {pairedExperiences.map((pair, index) => (
                  <Carousel.Item key={index}>
                    <Row className="mx-auto">
                        <Col md={1}/>
                      {pair.map((data, dataIndex) => (
                        <Col md={5} key={dataIndex}>
                          <ExperienceCard data={data} className="mx-auto" />
                        </Col>
                      ))}
                        <Col md={1}/>
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
              <style>
                {`
                  .carousel-control-next {
                    background-color: ${carouselNextButtonStyles.backgroundColor};
                    color: ${carouselNextButtonStyles.color};
                    right: 0px;
                    width: 100px;
                    /* Add other styles as needed */
                  }

                  .carousel-control-next:hover {
                    background-color: ${carouselNextButtonHoverStyles.backgroundColor};
                    /* Add other hover styles as needed */
                  }

                  .carousel-control-prev {
                    background-color: ${carouselNextButtonStyles.backgroundColor};
                    color: ${carouselNextButtonStyles.color};
                    left: 0px;
                    width: 100px;
                    /* Add other styles as needed */
                  }

                  .carousel-control-prev:hover {
                    background-color: ${carouselNextButtonHoverStyles.backgroundColor};
                    /* Add other hover styles as needed */
                  }

                  .carousel-control-prev-icon,
                  .carousel-control-next-icon {
                      width: 80px;  /* Adjust as needed */
                      height: 80px;  /* Adjust as needed */
                      background-color: transparent; /* This removes the default white background */
                      filter: invert(1);
                  }
                `}
              </style>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

    </section>
  );
}

// const Experience = ({ experiences }) => {
//   return (
//     <section className="section" id="experiences">
//       <Container>
//         <Jumbotron className="bg-white">
//           <h2 className="display-4 mb-5 text-center">
//             {experiences.heading}
//           </h2>
//           <Row>
//             {
//               experiences.data.map((data, index) => {
//                 return <ExperienceCard key={index} data={data} />
//               })
//             }
//           </Row>
//         </Jumbotron>
//       </Container>
//     </section>
//   );
// }

export default Experience;