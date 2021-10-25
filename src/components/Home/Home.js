import React, { useEffect, useState } from "react";
import "./Home.css";

import Courses from "../Courses/Courses";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./info.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="py-4">
      {/* banner-image  */}
      <div className="banner">
        <img
          className="img-fluid h-40"
          src="https://www.educationagentsguide.com/images/9363/logo_original6f76.jpg"
          alt=""
        />
      </div>
      <br />

      {/* featured-course */}
      <div>
        <h1 className="headline bg-dark text-white pb-3 pt-3 mb-3 text-center">
          Our Featured Course
        </h1>
        <div className="card-content text-center">
          <div className="course-container"></div>
          {/* featured-search-button */}
          <div className="searchbox mt-4 mb-4">
            <input
              type="text"
              className="p-2"
              placeholder="Enter Your Course"
            />
            <button className="btn btn-danger p-2">Search</button>
          </div>
          {/* card-loop(course) */}
          <div className="courses">
            <Row xs={1} md={3} className="g-4">
              {courses.map((course) => (
                <Col>
                  {" "}
                  <Courses course={course}></Courses>{" "}
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
