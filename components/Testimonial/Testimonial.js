import React from "react";
import styles from "./Testimonial.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonial() {
  let settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section>
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-12 heading-section  ">
            <h2 className="mb-4">
              Our <span className="color_text">Testimonials</span>
            </h2>
          </div>
        </div>
      </div>

      <Container>
        <Row>
          <Col lg={9} md={12} sm={12} xs={12}>
            <Slider {...settings}>
              <div>
                <Row>
                  <Col className={styles.character_col} lg={4} sm={12}>
                    <Image
                      className={styles.character}
                      src="../images/person_1.jpg"
                      style={{ width: "125px", height: "125px" }}
                      alt="character"
                    ></Image>
                    <p className={styles.character_name}>- Joseph james</p>
                  </Col>
                  <Col lg={8} sm={12}>
                    <blockquote className="text-center">
                      <p className={styles.testimonial_text}>
                        <Image
                          className={styles.quote_icon}
                          src="/images/quote.svg"
                          style={{ width: "20px", height: "20px" }}
                          alt="character"
                        ></Image>
                        Everybody is a genius. But if you judge a fish by its
                        ability to climb a tree, it will live its whole life
                        believing that it is stupid.Everybody is a genius. But
                        if you judge a fish by its ability to climb a tree, it
                        will live its whole life believing that it is stupid.
                      </p>
                    </blockquote>
                  </Col>
                </Row>
              </div>

              <div>
                <Row>
                  <Col className={styles.character_col} lg={4} sm={12}>
                    <Image
                      className={styles.character}
                      src="../images/person_1.jpg"
                      style={{ width: "125px", height: "125px" }}
                      alt="character"
                    ></Image>
                    <p className={styles.character_name}>- Joseph james</p>
                  </Col>
                  <Col lg={8} sm={12}>
                    <blockquote className="text-center">
                      <p className={styles.testimonial_text}>
                        <Image
                          className={styles.quote_icon}
                          src="/images/quote.svg"
                          style={{ width: "20px", height: "20px" }}
                          alt="character"
                        ></Image>
                        Everybody is a genius. But if you judge a fish by its
                        ability to climb a tree, it will live its whole life
                        believing that it is stupid.Everybody is a genius. But
                        if you judge a fish by its ability to climb a tree, it
                        will live its whole life believing that it is stupid.
                      </p>
                    </blockquote>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col className={styles.character_col} lg={4} sm={12}>
                    <Image
                      className={styles.character}
                      src="../images/person_1.jpg"
                      style={{ width: "125px", height: "125px" }}
                      alt="character"
                    ></Image>
                    <p className={styles.character_name}>- Joseph james</p>
                  </Col>
                  <Col lg={8} sm={12}>
                    <blockquote className="text-center">
                      <p className={styles.testimonial_text}>
                        <Image
                          className={styles.quote_icon}
                          src="/images/quote.svg"
                          style={{ width: "20px", height: "20px" }}
                          alt="character"
                        ></Image>
                        Everybody is a genius. But if you judge a fish by its
                        ability to climb a tree, it will live its whole life
                        believing that it is stupid.Everybody is a genius. But
                        if you judge a fish by its ability to climb a tree, it
                        will live its whole life believing that it is stupid.
                      </p>
                    </blockquote>
                  </Col>
                </Row>
              </div>
            </Slider>
          </Col>
          <Col
            className="text-center"
            style={{ margin: "auto" }}
            lg={3}
            md={12}
            sm={12}
            xs={12}
          >
            <h1 className={styles.head_tag}>4,00,000 +</h1>
            <p>Happy Customers</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
