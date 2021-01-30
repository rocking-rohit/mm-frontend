import { slide as Menu } from "react-burger-menu";
import React, { useState, useContext } from "react";
import styles from "./BurgerMenu.module.css";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

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
        <Col
          lg={10}
          md={10}
          sm={9}
          xs={9}
          className="d-flex align-items-center"
        >
          {children}
        </Col>
        <Col lg={2} md={2} sm={3} xs={3} className="d-flex align-items-center">
          {isCurrentEventKey ? (
            <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
          ) : (
            <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
          )}
        </Col>
      </Row>
    </Card>
  );
}

function BurgerMenu(props) {
  return (
    <Menu className={styles.menu} {...props}>
      <Container>
        <Accordion defaultActiveKey="11" className={styles.course_block}>
          <Card className={styles.card}>
            <ContextAwareToggle
              className={styles.card_header}
              as={Card.Header}
              eventKey="11"
            >
              <h5 className="pd-b-10 pd-t-10">Course categories</h5>
            </ContextAwareToggle>
            <Accordion.Collapse eventKey="11">
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Accordion eventKey="0">
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="0"
                      >
                        <p className={styles.cat_main}>
                          {" "}
                          Server Administration
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="1"
                      >
                        <p className={styles.cat_main}>Digital experience</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="2"
                      >
                        <p className={styles.cat_main}>Blockchain</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="3"
                      >
                        <p className={styles.cat_main}>Data warehousing</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                  <Accordion eventKey="0">
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="0"
                      >
                        <p className={styles.cat_main}>
                          Network & storage warehousing
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="1"
                      >
                        <p className={styles.cat_main}>
                          Countinious Integration and delivery
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="2"
                      >
                        <p className={styles.cat_main}>Hadoop Training</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="3"
                      >
                        <p className={styles.cat_main}>Grunt Training</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Link href="">
                    <a className="nav-link btn btn-outline-primary py-2 px-4">
                      <MdKeyboardArrowRight className={styles.course_icon} />
                      More Courses
                    </a>
                  </Link>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        {/* xs accordion starts */}

        <Accordion eventKey="11" className={styles.course_block_xs}>
          <Card className={styles.card}>
            <ContextAwareToggle
              className={styles.card_header}
              as={Card.Header}
              eventKey="11"
            >
              <h5 className="pd-b-10 pd-t-10">Course categories</h5>
            </ContextAwareToggle>
            <Accordion.Collapse eventKey="11">
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Accordion eventKey="0">
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="0"
                      >
                        <p className={styles.cat_main}>
                          {" "}
                          Server Administration
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="1"
                      >
                        <p className={styles.cat_main}>Digital experience</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="2"
                      >
                        <p className={styles.cat_main}>Blockchain</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="3"
                      >
                        <p className={styles.cat_main}>Data warehousing</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                  <Accordion eventKey="0">
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="0"
                      >
                        <p className={styles.cat_main}>
                          Network & storage warehousing
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="1"
                      >
                        <p className={styles.cat_main}>
                          Countinious Integration and delivery
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="2"
                      >
                        <p className={styles.cat_main}>Hadoop Training</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="3"
                      >
                        <p className={styles.cat_main}>Grunt Training</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Agile training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Spotfire training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Fortnite training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Git training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Financials training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              ServiceNow training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Link href="">
                    <a className="nav-link btn btn-outline-primary py-2 px-4">
                      <MdKeyboardArrowRight className={styles.course_icon} />
                      More Courses
                    </a>
                  </Link>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        {/* xs accordion ends */}

        <div class={styles.sub_block}>
          <p>
            <Link href="https://mindmajix.com/blog">
              <a class={styles.sub_menu}>Blog</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/corporate-training">
              <a class={styles.sub_menu}>Corporate Training</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/instructor">
              <a class={styles.sub_menu}>Become an Instructor</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/corporate-training">
              <a class={styles.sub_menu}>About us</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/instructor">
              <a class={styles.sub_menu}>Become an Instructor</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/blog">
              <a class={styles.sub_menu}>Blog</a>
            </Link>
          </p>
        </div>
      </Container>
    </Menu>
  );
}

export default BurgerMenu;
