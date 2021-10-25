import React from 'react';
import { Card } from 'react-bootstrap';

const Courses = (props) => {
    const { courseName, image, price, instructor} = props.course;
  
    return (
    // card-section
    <Card className="h-100">
      <div className = "d-flex flex-column justify-content-between " >
          <img className="card-image" width="100%" height="230px" src= {image} alt="" />
        <Card.Body>
          <Card.Title>{courseName}</Card.Title>
          <p><b>Price:</b> ${price}
          <br /> by <b>{instructor}</b></p>
         <div>
           <button className="btn btn-danger">Enroll Now</button>
         </div>
        </Card.Body>
      </div>
  </Card>   
       
    );
};

export default Courses;