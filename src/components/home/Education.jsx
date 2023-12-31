import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Col, Card, CardImg, CardBody, CardTitle, CardText,
  Container,
  Row,
} from "react-bootstrap";

const Education = ({ school }) => {
  const data = school.data[0]
  return (
    <section className="section" id="education">
      <Jumbotron className="m-0 min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
        <div className="container mx-auto text-center">
            <h2 className="display-4 mb-5 text-center">
              Education
            </h2>
            <div className="row">
              <div className="col-md-3">
                <img src={data.logoUrl} alt={data.schoolName} className="img-fluid" />
              </div>
              <div className='col-md-1'></div>
              <div className="col-md-8">
                <h2 className="card-title">{data.schoolName}</h2>
                <br />
                <h6> Bachelor of Computing (BComp, Honours) in Computer Science </h6>
                <h6> Degree Class: Honour with Distinction </h6>
                <h6> Undergraduate student from August 2020 to May 2024 </h6>
                <br />
                <p className="card-text" style={{textAlign: 'justify', whiteSpace: 'pre-wrap'}}>{data.description}</p>
              </div>
          </div>
        </div>
      </Jumbotron>
    </section>
  );
}

export default Education;