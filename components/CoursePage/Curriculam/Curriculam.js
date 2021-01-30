import React from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";
import styles from "./Curriculam.module.css";
import { RiArrowDropRightLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { CgArrowRightO } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";

function Curriculam() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={8} md={8} sm={12} xs={12}>
            <h2>Curriculam</h2>
            <p>
              You will be exposed to the complete oracle fusion financials
              course details in the below sections.
            </p>
            <Accordion defaultActiveKey="0">
              <Card className={styles.card}>
                <Accordion.Toggle
                  className={styles.card_header}
                  as={Card.Header}
                  eventKey="0"
                >
                  <Row>
                    <Col lg={10} className="d-flex align-items-center">
                      <h5 className="m-0">Oracle Fusion Introduction</h5>
                    </Col>
                    <Col lg={2} className="d-flex align-items-center">
                      <GoPlus className={styles.acord_icon} />
                    </Col>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Fusion - Technology architecture
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      User and Roles security
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Multi Org structure
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Offerings
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Project Implementation plan and tracking of tasks
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Accordion.Toggle
                  className={styles.card_header}
                  as={Card.Header}
                  eventKey="1"
                >
                  <Row>
                    <Col lg={1} className="d-flex align-items-center">
                      <GoPlus className={styles.acord_icon} />
                    </Col>
                    <Col lg={11} className="d-flex align-items-center">
                      <h5 className="m-0">Oracle Fusion General Ledger</h5>
                    </Col>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Live demonstration of features and practicals.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Get LMS access of each Oracle Fusion Financials Online
                      training session through GotoMeeting.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Gain guidance on certification.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Attend a Free Demo before signing up.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Accordion.Toggle
                  className={styles.card_header}
                  as={Card.Header}
                  eventKey="2"
                >
                  <Row>
                    <Col lg={1} className="d-flex align-items-center">
                      <GoPlus className={styles.acord_icon} />
                    </Col>
                    <Col lg={11} className="d-flex align-items-center">
                      <h5 className="m-0">Oracle Fusion Account Payables</h5>
                    </Col>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Live demonstration of features and practicals.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Get LMS access of each Oracle Fusion Financials Online
                      training session through GotoMeeting.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Gain guidance on certification.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Attend a Free Demo before signing up.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Accordion.Toggle
                  className={styles.card_header}
                  as={Card.Header}
                  eventKey="3"
                >
                  <Row>
                    <Col lg={1} className="d-flex align-items-center">
                      <GoPlus className={styles.acord_icon} />
                    </Col>
                    <Col lg={11} className="d-flex align-items-center">
                      <h5 className="m-0">Oracle Fusion Account Receivables</h5>
                    </Col>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Live demonstration of features and practicals.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Get LMS access of each Oracle Fusion Financials Online
                      training session through GotoMeeting.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Gain guidance on certification.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Attend a Free Demo before signing up.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Accordion.Toggle
                  className={styles.card_header}
                  as={Card.Header}
                  eventKey="4"
                >
                  <Row>
                    <Col lg={1} className="d-flex align-items-center">
                      <GoPlus className={styles.acord_icon} />
                    </Col>
                    <Col lg={11} className="d-flex align-items-center">
                      <h5 className="m-0">Oracle Fusion Cash Management</h5>
                    </Col>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Live demonstration of features and practicals.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Get LMS access of each Oracle Fusion Financials Online
                      training session through GotoMeeting.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Gain guidance on certification.
                    </p>
                    <p className={styles.p_text}>
                      <CgArrowRightO className="btn_icon" />
                      Attend a Free Demo before signing up.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className={styles.contact_side}>
              <Form>
                <Row>
                  <Col lg={12} sm={12} className="pd-t-15">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        className={styles.contact_input}
                        required
                        type="text"
                        placeholder="Enter Name"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} className="pd-t-15">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        className={styles.contact_input}
                        required
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} className="pd-t-15">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        className={styles.contact_input}
                        required
                        type="text"
                        placeholder="Enter Phone number"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} className="pd-t-15">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        className={styles.contact_input}
                        as="textarea"
                        rows={3}
                        placeholder="Enter Message"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  variant="primary"
                  className="btn-outline-primary py-2 px-4 m-t-15"
                  type="submit"
                >
                  <FiArrowRight className="btn_icon" />
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Curriculam;
