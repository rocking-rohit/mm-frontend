import React from "react";
import styles from "./Banner.module.css";
// import Typical from "react-typical";
// import Typist from "react-typist";
var ReactRotatingText = require("react-rotating-text");
import { Form, Row, Container, Col, Image } from "react-bootstrap";
import { BiStar } from "react-icons/bi";
import { RiGoogleFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { SiTrustpilot } from "react-icons/si";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectStateResults,
  Configure,
  connectSearchBox,
  connectHits,
} from "react-instantsearch-dom";
const searchClient = algoliasearch(
  "02NVWU5GZ0",
  "0a66ea3adf27b08233b648b353a4f7f8"
);

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchState && searchState.query ? (
      searchResults && searchResults.nbHits !== 0 ? (
        children
      ) : (
        <div>No results have been found for {searchState.query}.</div>
      )
    ) : null
);

const Hits = ({ hits }) => (
  <ul>
    {hits.map((hit) => (
      <li key={hit.objectID} style={{ backgroundColor: "grey" }}>
        {hit.url_title
          .split("-")
          .map((item) => item.toUpperCase(0))
          .join(" ")}
      </li>
    ))}
  </ul>
);

const CustomHits = connectHits(Hits);

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <Form className="pd-t-10 pd-b-10">
    <Form.Group controlId="exampleForm.ControlInput1 text-white">
      <Form.Control
        className={styles.search_bar}
        type="text"
        placeholder="Search Courses"
        style={{ color: "white" }}
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </Form.Group>
  </Form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

function Banner() {
  return (
    <div>
      <div className={styles.hero_wrap}>
        <Container>
          <Row className={styles.resp_row}>
            <Col lg={6} md={6} sm={12} xs={12} className="m-auto">
              <h1 className={styles.main_text}>
                Get &nbsp;
                <ReactRotatingText
                  className={styles.typed_bg}
                  items={["Trained", "Certified", "Up-skilled"]}
                />
              </h1>
              <span className="typed-cursor" />
              <p className="text-white">
                We deliver custom-quality training solutions<br></br>for your
                virtual career enhancement.
              </p>

              <InstantSearch indexName="mindmajix" searchClient={searchClient}>
                <Configure hitsPerPage={5} distinct />
                <CustomSearchBox />
                <Results>
                  <CustomHits />
                </Results>
              </InstantSearch>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className="display_xs">
              <img
                src="images/banner.svg"
                srcset="images/banner.svg 555w, images/banner.svg 480w, images/banner.svg 350w"
                alt="yah"
              ></img>
            </Col>
          </Row>
        </Container>

        <Container className={styles.home_rating}>
          <Row className={styles.rating_row}>
            <Col lg={3} md={3} sm={3} xs={11} className={styles.rating_col}>
              <Row style={{ textAlign: "center" }}>
                <Col lg={4} md={4} sm={4} xs={4} className="pd-b-25 pd-t-25">
                  <div>
                    <RiGoogleFill className={styles.social_banner_icon} />
                  </div>
                  <div>
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarHalf className={styles.social_banner_icon_2} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4} className="pd-b-25 pd-t-25">
                  <div>
                    <RiFacebookFill className={styles.social_banner_icon} />
                  </div>
                  <div>
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarHalf className={styles.social_banner_icon_2} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4} className="pd-b-25 pd-t-25">
                  <div>
                    <SiTrustpilot className={styles.social_banner_icon} />
                  </div>
                  <div>
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarHalf className={styles.social_banner_icon_2} />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={3} md={3} sm={3} xs={3} className={styles.text_col_lg}>
              <p className={styles.text_tag}>
                Trusted and <br></br>appreciated by
              </p>
            </Col>

            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ display: "none" }}
              className={styles.text_col_xs}
            >
              <p className={styles.text_tag}>Trusted and appreciated by</p>
            </Col>

            <Col lg={5} md={5} sm={12} xs={12} className={styles.company_col}>
              <Row>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "120px", height: "65px" }}
                    alt="Infosys"
                    src="/images/infosys.svg"
                  ></Image>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "120px", height: "65px" }}
                    alt="Gartner"
                    src="/images/gartner.svg"
                  ></Image>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "120px", height: "75px" }}
                    alt="TCS"
                    src="/images/pfizer.svg"
                  ></Image>
                </Col>
              </Row>
            </Col>

            <Col lg={1} md={1} sm={1} xs={1} className={styles.display_xs}>
              <div className={styles.box}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Col>
          </Row>
          <div className={styles.xs_rating}>
            <Row className="m-0">
              <Col lg={4} md={4} sm={4} xs={4}>
                <p className={styles.xs_text}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "90px", height: "65px" }}
                    alt="Infosys"
                    src="/images/infosys.svg"
                  ></Image>
                </p>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                <p className={styles.xs_text}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "90px", height: "65px" }}
                    alt="Gartner"
                    src="/images/gartner.svg"
                  ></Image>
                </p>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                <p className={styles.xs_text}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "90px", height: "75px" }}
                    alt="TCS"
                    src="/images/pfizer.svg"
                  ></Image>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container className={styles.xs_rating}>
        <Row className="m-0">
          <Col lg={4} md={4} sm={4} xs={4} style={{ textAlign: "center" }}>
            <p className={styles.xs_text}>
              <Image
                className={styles.xs_icon}
                src="/images/google_icon.svg"
                style={{ width: "30px", height: "30px" }}
                alt="google rating"
              ></Image>{" "}
              4.5/5
            </p>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} style={{ textAlign: "center" }}>
            <p className={styles.xs_text}>
              <Image
                className={styles.xs_icon}
                src="/images/facebook_icon.svg"
                style={{ width: "30px", height: "30px" }}
                alt="facebook rating"
              ></Image>{" "}
              4.5/5
            </p>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} style={{ textAlign: "center" }}>
            <p className={styles.xs_text}>
              <Image
                className={styles.xs_icon}
                src="/images/trustpilot_icon.svg"
                style={{ width: "30px", height: "30px" }}
                alt="Trustpilot rating"
              ></Image>{" "}
              4.5/5
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
