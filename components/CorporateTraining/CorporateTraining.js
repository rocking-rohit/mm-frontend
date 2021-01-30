import React from "react";
import styles from "./CorporateTraining.module.css";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { Container, Row, Col, Image } from "react-bootstrap";

function CorporateTraining() {
  return (
    <section className={styles.corporate_row}>
      <Container>
        <Row>
          <Col lg={7} md={7} sm={12} xs={12} className="m-auto">
            <div className="w-100">
              <h2 className="mb-4">
                Enterprise Training{" "}
                <span className="color_text"> Solutions</span>
              </h2>
              <p className="mb-3">
                Invest in improving your corporate workforce to enhance the
                productivity exceptionally.
              </p>
            </div>
            <div className={styles.cp_text}>
              <p className={styles.p_text}>
                <RiArrowDropRightLine className="btn_icon" />
                Customized learning methodologies scaled to your corporate
                needs.
              </p>
              <p className={styles.p_text}>
                <RiArrowDropRightLine className="btn_icon" />
                Instructor led virtual training mode with real time projects.
              </p>
              <p className={styles.p_text}>
                <RiArrowDropRightLine className="btn_icon" />
                Learn as per full day schedule with discussions, exercises and
                practical use cases.
              </p>
            </div>
            <p>
              <a
                href="#"
                className="btn btn-outline-primary py-2 px-3 button_resp"
              >
                Read more
              </a>
            </p>
          </Col>
          <Col lg={5} md={5} sm={12} xs={12}>
            <Row className={styles.client_row}>
              <Col lg={4} md={4} sm={4} xs={4} className={styles.client_img}>
                <div className={styles.client_bg}>
                  <Image
                    src="images/clients/bosch.svg"
                    style={{ width: "120px", height: "60px" }}
                    alt="Mindmajix-client"
                  />
                </div>
                <div className={styles.client_bg}>
                  <Image
                    src="images/clients/capgemini.svg"
                    style={{ width: "120px", height: "60px" }}
                    alt="Mindmajix-client"
                  />
                </div>
                <div className={styles.client_bg}>
                  <Image
                    src="images/clients/deloitte.svg"
                    style={{ width: "120px", height: "60px" }}
                    alt="Mindmajix-client"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4} className={styles.client_img}>
                <div className={styles.client_bg}>
                  <Image
                    src="images/clients/intel.svg"
                    style={{ width: "120px", height: "60px" }}
                    alt="Mindmajix-client"
                  />
                </div>
                <div className={styles.client_bg}>
                  <Image
                    src="images/clients/novartis.svg"
                    style={{ width: "120px", height: "60px" }}
                    alt="Mindmajix-client"
                  />
                </div>
                <div className={styles.client_bg}>
                  <Image
                    src="images/clients/pwc.svg"
                    style={{ width: "120px", height: "60px" }}
                    alt="Mindmajix-client"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4} className={styles.client_img}>
                <div className={styles.client_bg}>
                  <Image
                    src="images/clients/techdata.svg"
                    style={{ width: "120px", height: "60px" }}
                    alt="Mindmajix-client"
                  />
                </div>
                <div className={styles.client_bg}>
                  <Image
                    src="images/clients/visa.svg"
                    style={{ width: "120px", height: "60px" }}
                    alt="Mindmajix-client"
                  />
                </div>
                <div className={styles.client_bg}>
                  <Image
                    src="images/clients/tata_power.svg"
                    style={{ width: "120px", height: "60px" }}
                    alt="Mindmajix-client"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CorporateTraining;
