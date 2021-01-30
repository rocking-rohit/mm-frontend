import React from "react";
import styles from "./NavCourse.module.css";
import { Navbar, Nav } from "react-bootstrap";

function NavCourse() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        nav section
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" className={styles.nav_center}>
          <Nav.Link href="#Curriculam">Curriculam</Nav.Link>
          <Nav.Link href="#TrainingOptions">Training options</Nav.Link>
          <Nav.Link href="#CourseBenifits">Course benifits</Nav.Link>
          <Nav.Link href="#FAQ">FAQ's</Nav.Link>
          <Nav.Link href="#Reviews">Reviews</Nav.Link>
          <Nav.Link href="#RelatedCourses">Related courses</Nav.Link>
          <Nav.Link href="#EnrollNow">Enroll now</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavCourse;
