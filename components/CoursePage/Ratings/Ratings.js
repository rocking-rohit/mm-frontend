import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Ratings.module.css";

function Ratings() {
  return (
    <section className={styles.course_rating}>
      <Container>
        <Row>
          <Container>
            <Row>
              <Col lg={4} sm={12}>
                <Row>
                  <Col lg={4} sm={4} xs={4} className="pd-b-25 pd-t-25">
                    <Row>
                      <Col lg={4} sm={4} xs={4}>
                        <img
                          className={styles.course_social}
                          src="/images/google.svg"
                        ></img>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <p className={styles.course_feature_text}>
                          5
                          <img
                            className={styles.star_icon}
                            src="/images/course-star.svg"
                          ></img>
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} sm={4} xs={4} className="pd-b-25 pd-t-25">
                    <Row>
                      <Col lg={4} sm={4} xs={4}>
                        <img
                          className={styles.course_social}
                          src="/images/facebook.svg"
                        ></img>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <p className={styles.course_feature_text}>
                          5
                          <img
                            className={styles.star_icon}
                            src="/images/course-star.svg"
                          ></img>
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} sm={4} xs={4} className="pd-b-25 pd-t-25">
                    <Row>
                      <Col lg={4} sm={4} xs={4}>
                        <img
                          className={styles.course_social}
                          src="/images/trustpilot.svg"
                        ></img>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <p className={styles.course_feature_text}>
                          5
                          <img
                            className={styles.star_icon}
                            src="/images/course-star.svg"
                          ></img>
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col lg={8} sm={12}>
                <Row>
                  <Col lg={4} sm={12} className={styles.feature_block}>
                    <Row>
                      <Col lg={4} sm={4} xs={4}>
                        <img
                          className={styles.course_feature_icon}
                          src="/images/course-feature-1.svg"
                        ></img>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <p className={styles.course_feature_text}>Learning</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} sm={12} className={styles.feature_block}>
                    <Row>
                      <Col lg={4} sm={4} xs={4}>
                        <img
                          className={styles.course_feature_icon}
                          src="/images/course-feature-1.svg"
                        ></img>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <p className={styles.course_feature_text}>Learning</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} sm={12} className={styles.feature_block}>
                    <Row>
                      <Col lg={4} sm={4} xs={4}>
                        <img
                          className={styles.course_feature_icon}
                          src="/images/course-feature-1.svg"
                        ></img>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <p className={styles.course_feature_text}>Learning</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} sm={12} className={styles.feature_block}>
                    <Row>
                      <Col lg={4} sm={4} xs={4}>
                        <img
                          className={styles.course_feature_icon}
                          src="/images/course-feature-1.svg"
                        ></img>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <p className={styles.course_feature_text}>Learning</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} sm={12} className={styles.feature_block}>
                    <Row>
                      <Col lg={4} sm={4} xs={4}>
                        <img
                          className={styles.course_feature_icon}
                          src="/images/course-feature-1.svg"
                        ></img>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <p className={styles.course_feature_text}>Learning</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} sm={12} className={styles.feature_block}>
                    <Row>
                      <Col lg={4} sm={4} xs={4}>
                        <img
                          className={styles.course_feature_icon}
                          src="/images/course-feature-1.svg"
                        ></img>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <p className={styles.course_feature_text}>Learning</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </section>
  );
}

export default Ratings;
