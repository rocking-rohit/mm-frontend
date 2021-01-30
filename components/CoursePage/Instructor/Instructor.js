import React from "react";
import styles from "./Instructor.module.css";
import { Container, Button, Row, Col } from "react-bootstrap";

function Instructor() {
  return (
    <section>
      <Container>
        <p>a line on Instructor</p>
        <h2 className="pd-b-25">
          Instructor
          <img className="heading_line" src="/images/line-3.svg"></img>
        </h2>
        <Row>
          <Col lg={9} md={9} sm={12} xs={12}>
            <Row>
              <Col className="d-flex" lg={2} md={2} sm={12} xs={12}>
                <img
                  className={styles.character}
                  src="../images/person_1.jpg"
                ></img>
              </Col>
              <Col className="d-flex" lg={10} md={10} sm={12} xs={12}>
                <table>
                  <tbody>
                    <tr>
                      <th className={styles.table_element}>Name</th>
                      <td className={styles.table_element}>Jamesh josef</td>
                    </tr>
                    <tr>
                      <th className={styles.table_element}>Experience</th>
                      <td className={styles.table_element}>12+</td>
                    </tr>
                    <tr>
                      <th className={styles.table_element}>Specialist in</th>
                      <td className={styles.table_element}>
                        Python, Java, C++, C#
                      </td>
                    </tr>
                    <tr>
                      <th className={styles.table_element}>Description</th>
                      <td className={styles.table_element}>
                        A two line description on Instructor way of explanation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12}>
            <ul>
              <li className={styles.table_element}>
                <a href="">
                  <h5>Online Training</h5>
                </a>
              </li>
              <li className={styles.table_element}>
                <a href="">
                  <h5>Self Paced Training</h5>
                </a>
              </li>
              <li className={styles.table_element}>
                <a href="">
                  <h5>Corprate Training</h5>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Instructor;
