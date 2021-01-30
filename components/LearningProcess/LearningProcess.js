import React, { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";
import { CgArrowRightO } from "react-icons/cg";
import { RiArrowDropRightLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import styles from "./LearningProcess.module.css";
import AnimatedNumber from "animated-number-react";
import { FiMinus } from "react-icons/fi";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Card
      onClick={decoratedOnClick}
      className={styles.card_header}
      as={Card.Header}
    >
      <Row>
        <Col lg={2} md={2} sm={2} xs={2} className="d-flex align-items-center">
          {isCurrentEventKey ? <FiMinus /> : <GoPlus />}
        </Col>
        <Col
          lg={10}
          md={10}
          sm={10}
          xs={10}
          className="d-flex align-items-center"
        >
          {children}
        </Col>
      </Row>
    </Card>
  );
}

function LearningProcess() {
  const formatValue = (value) => `${value.toFixed(2)}`;
  // const [formatValue, setFormatValue] = useState(300);

  return (
    <section className="ftco-section services-section sec-pad">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}></Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <p>For Individuals</p>
            <h2 className="pd-b-25">
              <span className="color_text">Training</span> Modes
            </h2>

            <Accordion defaultActiveKey="0">
              <Card className={styles.card}>
                <ContextAwareToggle eventKey="0">
                  <h5 className="m-0">Live Virtual Training</h5>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Schedule your sessions at your comfortable timings.
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Instructor led training with practical lab sessions.
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Real time projects and certification guidance.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <ContextAwareToggle
                  className={styles.card_header}
                  as={Card.Header}
                  eventKey="1"
                >
                  <h5 className="m-0">Self Paced Learning</h5>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Complete set of live-online training sessions recorded
                      videos.
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Learn technology at your own pace.
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Get access for lifetime.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className={styles.animated_bg}>
            <Row>
              <Col lg={6} md={6} sm={6} xl={6} className="p-0">
                <div className={styles.animated_card_1}>
                  <AnimatedNumber
                    className={styles.number}
                    value="100"
                    duration="1500"
                    formatValue={(n) => n.toFixed(0)}
                  />
                  <p>Corporate Clients</p>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xl={6} className="p-0">
                <div className={styles.animated_card_2}>
                  <AnimatedNumber
                    className={styles.number}
                    value="410350"
                    duration="1500"
                    formatValue={(n) => n.toFixed(0)}
                  />
                  <p>Happy Students</p>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xl={6} className="p-0">
                <div className={styles.animated_card_3}>
                  <AnimatedNumber
                    className={styles.number}
                    value="550"
                    duration="1500"
                    formatValue={(n) => n.toFixed(0)}
                  />
                  <p>Courses</p>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xl={6} className="p-0">
                <div className={styles.animated_card_4}>
                  <AnimatedNumber
                    className={styles.number}
                    value="210"
                    duration="1500"
                    formatValue={(n) => n.toFixed(0)}
                  />
                  <p>Instructors</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LearningProcess;
