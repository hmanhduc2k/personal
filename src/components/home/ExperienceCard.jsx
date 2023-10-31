import React from 'react';
import Popup from './Popup';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="10" className='mx-auto' style={{ height: '500px', objectFit: 'cover'}}>
      <div className="pb-5 mx-auto" style={{ height: '300px', justifyContent: 'center'}}>
    <div className='mx-auto' style={{ height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img
        className="bg-white mb-3"
        style={{
          width: '300px',   // Allow the image to scale proportionally
          height: '100%',  // Make sure the image takes full height within the container
          objectFit: 'contain',  // Ensure the image fits within the container
        }}
        src={data.companylogo}
        alt=""
      />
    </div>
        <p className="lead mx-auto">
          {data.role}
          <br />
          {data.date}
        </p>
        <div className="App">
          <Popup data={data}/>
        </div>

        <div  style={{textAlign: 'justify'}} >
          <ul>
            {data.tasks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

       
        
      </div>
    </Col>
  );
}

export default ExperienceCard;