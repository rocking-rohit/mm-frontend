import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { RiPhoneFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <footer className={styles.bg_bottom}>
      <Container>
        <Row className="text-center pd-t-25 pd-b-25">
          <Col lg={1} md={1} sm={12} xs={12} className={styles.footer_col_1}>
            <ul
              className={`list-unstyled float-md-left float-lft ${styles.social_flex}`}
            >
              <li>
                <a
                  href="https://www.facebook.com/MindMajixTechnologies"
                  target="_blank"
                >
                  <FaFacebookF className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/mindmajix" target="_blank">
                  <FaTwitter className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mindmajix/" target="_blank">
                  <FaInstagram className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/mindmajix"
                  target="_blank"
                >
                  <FaLinkedin className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/mindmajix" target="_blank">
                  <FaYoutube className={styles.social_icon} />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={11} md={11} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h2 className={`pd-b-25 ${styles.btn_shine}`}>
                  Get updates on offers and new courses
                </h2>
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-md-10 form-group">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          className={styles.contact_input}
                          required
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-2 form-group ">
                      <Button
                        variant="primary"
                        className={`btn-outline-primary py-2 px-4 ${styles.footer_btn}`}
                        type="submit"
                        style={{ float: "right", color: "white !important" }}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className="pd-t-25">
                <Row>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <ImLocation className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}>
                      244 Fifth Avenue, Suite 1222 New York(NY) United States
                      (US) - 10001
                    </p>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <RiPhoneFill className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}> USA : +1 917 456 8403</p>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <IoMail className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}> info@mindmajix.com</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className="pd-t-25">
                <Row>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <ImLocation className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}>
                      91Springboard, 512/10, Service Lane, Outer Ring Road,
                      Mahadevapura, Next to More Megastore, Bangalore 560048,
                      Karnataka
                    </p>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <RiPhoneFill className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}> India : +91 905 240 3388</p>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <IoMail className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}> info@mindmajix.com</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Row style={{ margin: "auto" }}>
            <Col lg={7} md={7} sm={6} xs={6} className="pd-t-15">
              <h5
                className="text-white pd-b-15"
                style={{ borderBottom: "1px solid #c2c2c2" }}
              >
                Trending courses
              </h5>
              <div className="mb-4 ">
                <ul className={`list-unstyled ${styles.footer_flex}`}>
                  <li>
                    <a
                      href="https://mindmajix.com/tableau-training"
                      className="p-2 d-block text-white"
                    >
                      Tableau Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/microsoft-azure-training"
                      className="p-2 d-block text-white"
                    >
                      Microsoft Azure Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/oracle-dba-training"
                      className="p-2 d-block text-white"
                    >
                      Oracle DBA Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/qlikview-training"
                      className="p-2 d-block text-white"
                    >
                      QlikView Training
                    </a>
                  </li>
                </ul>
                <ul className={`list-unstyled ${styles.footer_flex}`}>
                  <li>
                    <a
                      href="https://mindmajix.com/docker-training"
                      className="p-2 d-block text-white"
                    >
                      Docker Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/jboss-training"
                      className="p-2 d-block text-white"
                    >
                      JBoss Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/informatica-training"
                      className="p-2 d-block text-white"
                    >
                      Informatica Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/power-bi-training"
                      className="p-2 d-block text-white"
                    >
                      Power BI Trainings
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5} md={5} sm={6} xs={6} className="pd-t-15">
              <h5
                className="text-white pd-b-15"
                style={{ borderBottom: "1px solid #c2c2c2" }}
              >
                Company
              </h5>
              <div className="mb-4 ">
                <ul className={`list-unstyled ${styles.footer_flex}`}>
                  <li>
                    <a
                      href="https://mindmajix.com/about"
                      className="p-2 d-block text-white"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/hire-from-mindmajix"
                      className="p-2 d-block text-white"
                    >
                      Hire from us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/sample-resumes"
                      className="p-2 d-block text-white"
                    >
                      Sample Resumes
                    </a>
                  </li>
                </ul>
                <ul className={`list-unstyled ${styles.footer_flex}`}>
                  <li>
                    <a
                      href="https://mindmajix.com/on-job-support"
                      className="p-2 d-block text-white"
                    >
                      On Job Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/blog"
                      className="p-2 d-block text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/reviews"
                      className="p-2 d-block text-white"
                    >
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/write-for-us"
                      className="p-2 d-block text-white"
                    >
                      Write for us
                    </a>
                  </li>
                </ul>
                <ul className={`list-unstyled ${styles.footer_flex}`}>
                  <li>
                    <a
                      href="https://mindmajix.com/terms-of-service-and-privacy-policy"
                      className="p-2 d-block text-white"
                    >
                      Terms of use
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/terms-of-service-and-privacy-policy"
                      className="p-2 d-block text-white"
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mindmajix.com/contact"
                      className="p-2 d-block text-white"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className="pd-t-15">
              <div className="mb-4 ml-md-5">
                <p className="text-white p-2 " style={{ textAlign: "center" }}>
                  Copyright © 2021 &nbsp;
                  <a
                    className="text-white"
                    href="https://mindmajix.com"
                    target="_blank"
                  >
                    Mindmajix Technologies Inc.&nbsp;
                  </a>
                  All Rights Reserved
                </p>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
