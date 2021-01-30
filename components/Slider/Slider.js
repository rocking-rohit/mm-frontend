import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Slider.module.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";

function Slider() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section>
      <Container>
        <Row>
          {/* First slide */}
          <Col lg={6} md={6} sm={12} xs={12}>
            <Card className={styles.feature_card} data-aos={"fade-right"}>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Image
                    src="/images/feature-6.svg"
                    alt="Industry_standard_curriculum"
                    className={styles.features_icon}
                  ></Image>
                </Col>
                <Col lg={10} md={10} sm={10} xs={10}>
                  <h5>Industry standard curriculum</h5>
                  <p>How to create a custom Button</p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <Card className={styles.feature_card} data-aos={"fade-left"}>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Image
                    src="/images/feature-5.svg"
                    alt="Real_world_projects"
                    className={styles.features_icon}
                  ></Image>
                </Col>
                <Col lg={10} md={10} sm={10} xs={10}>
                  <h5>Real world projects</h5>
                  <p>How to create a custom Button</p>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* third slide */}
          <Col lg={6} md={6} sm={12} xs={12}>
            <Card className={styles.feature_card} data-aos={"fade-right"}>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Image
                    src="/images/feature-1.svg"
                    alt="Flexible_schedules"
                    className={styles.features_icon}
                  ></Image>
                </Col>
                <Col lg={10} md={10} sm={10} xs={10}>
                  <h5>Flexible schedules</h5>
                  <p>How to create a custom Button</p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <Card className={styles.feature_card} data-aos={"fade-left"}>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Image
                    src="/images/feature-8.svg"
                    alt="Official_certification_guidance"
                    className={styles.features_icon}
                  ></Image>
                </Col>
                <Col lg={10} md={10} sm={10} xs={10}>
                  <h5>Official certification guidance</h5>
                  <p>How to create a custom Button</p>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* fifth slide */}
          <Col lg={6} md={6} sm={12} xs={12}>
            <Card className={styles.feature_card} data-aos={"fade-right"}>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Image
                    src="/images/feature-2.svg"
                    alt="Course_customizations"
                    className={styles.features_icon}
                  ></Image>
                </Col>
                <Col lg={10} md={10} sm={10} xs={10}>
                  <h5>Course customizations</h5>
                  <p>How to create a custom Button</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Slider;
