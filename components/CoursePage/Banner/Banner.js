import React from "react";
import styles from "./Banner.module.css";
import { Container, Button, Row, Col } from "react-bootstrap";
var ReactRotatingText = require("react-rotating-text");

function Banner() {
  return (
    <div className={styles.hero_wrap}>
      <Container>
        <Row
          className="no-gutters align-items-center"
          data-scrollax-parent="true"
        >
          <Col md={6} sm={12}>
            <p className={styles.course_typed}>
              Become a &nbsp;
              <ReactRotatingText
                className={styles.typed_bg}
                items={["Oracle", "Hadoop", "React"]}
              />
            </p>
            <span className="typed-cursor" />
            <h1 className="pd-b-10 text-white">Python training course</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore{" "}
            </p>
            <Button
              variant="primary"
              className="btn-outline-primary py-2 px-4 m-t-15 text-white"
              type="submit"
              style={{ float: "right" }}
            >
              Enroll now
            </Button>
          </Col>
          <Col md={6} sm={12}>
            <a href="https://youtu.be/1boOw3rBNAc">
              <img
                className={`animate__animated animate__pulse  ${styles.play_icon}`}
                src="images/play.svg"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
