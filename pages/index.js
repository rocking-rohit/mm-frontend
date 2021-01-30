import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Banner from "../components/Banner/Banner";
import NavBarMain from "../components/NavBarMain/NavBarMain";
import CourseCarousel from "../components/Carousel/CourseCarousel";
// import PopularCourses from "../components/PopularCourses/PopularCourses";
import LearningProcess from "../components/LearningProcess/LearningProcess";
import CorporateTraining from "../components/CorporateTraining/CorporateTraining";
// import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonial/Testimonial";
import ContactForm from "../components/ContactForm/ContactForm";
import CourseBenifits from "../components/CourseBenifits/CourseBenifits";
import PopularCategories from "../components/PopularCategories/PopularCategories";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import SocialFloat from "../components/SocialFloat/SocialFloat";
import SliderNew from "../components/SliderNew/SliderNew";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import toggleContext from "../context/context";
import { Container, Row, Col } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { FiArrowRight } from "react-icons/fi";

import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
  useContext,
  lazy,
  Suspense,
} from "react";
// const CourseBenifits = lazy(() =>
//   import("../components/CourseBenifits/CourseBenifits")
// );

// const CourseBenifits = dynamic(
//   () => import("../components/CourseBenifits/CourseBenifits"),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );

function Home() {
  const { width } = useWindowSize();
  const [showMenu, setshowMenu] = useState(false);
  const value = { showMenu, setshowMenu };

  // const content = useContext(toggleContext);

  const handleOnClose = () => {
    setshowMenu(false);
    // console.log("rohit");
  };

  return (
    <div id="body-container">
      <Head>
        <title>
          Online Certification Training | Corporate Training - Mindmajix
        </title>
        <link rel="icon" href="/images/fav.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <BurgerMenu
        right
        isOpen={showMenu}
        onClose={handleOnClose}
        outerContainerId={"body-container"}
      />

      <div style={{ width: "100%" }}>
        <toggleContext.Provider value={value}>
          <NavBarMain />
        </toggleContext.Provider>
        <Banner color="home" />
        <section>
          <Container>
            <Row className="pb-4">
              <Col lg={8} md={8} sm={12} xs={12}>
                <p>
                  Be ready with the skills before the industry adopts the
                  technology.
                </p>
                <h2 className="mb-4">
                  Trending <span className="color_text">courses</span>
                </h2>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12} className="m-auto display_xs">
                <p style={{ float: "right" }}>
                  <a
                    href="https://mindmajix.com/all-courses"
                    className="btn btn-outline-primary py-2 px-3 button_resp"
                  >
                    All Courses
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <CourseCarousel width={width} />
          </Container>
          <Container
            style={{ display: "none", paddingTop: "50px" }}
            className=" displayon_xs"
          >
            <Col lg={12} md={12} sm={12} xs={12} className="m-auto">
              <p style={{ float: "right" }}>
                <a
                  href="https://mindmajix.com/all-courses"
                  className="btn btn-outline-primary py-2 px-3 button_resp"
                >
                  All Courses
                </a>
              </p>
            </Col>
          </Container>
        </section>

        <section>
          <Container>
            <Row className="pb-4">
              <Col lg={8} md={8} sm={12} xs={12}>
                <p>Course categories with the highest number of enrolments.</p>
                <h2 className="mb-4">
                  Popular <span className="color_text">Categories</span>
                </h2>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12} className="m-auto display_xs">
                <p style={{ float: "right" }}>
                  <a
                    href="https://mindmajix.com/all-courses"
                    className="btn btn-outline-primary py-2 px-3 button_resp"
                  >
                    All Courses
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <PopularCategories width={width} />
          </Container>
          <Container
            style={{ display: "none", paddingTop: "50px" }}
            className=" displayon_xs"
          >
            <Col lg={12} md={12} sm={12} xs={12} className="m-auto">
              <p style={{ float: "right" }}>
                <a
                  href="https://mindmajix.com/all-courses"
                  className="btn btn-outline-primary py-2 px-3 button_resp"
                >
                  All Courses
                </a>
              </p>
            </Col>
          </Container>
        </section>

        <Container fluid>
          <SocialFloat />
        </Container>
        <LazyLoad once>
          <LearningProcess />
        </LazyLoad>
        <CorporateTraining />
        {/* <Features /> */}
        <LazyLoad once>
          {/* <Slider /> */}
          <SliderNew />
          {/* </LazyLoad> */}
          <LazyLoad once>
            <CourseBenifits />
          </LazyLoad>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {/* </Suspense> */}
          <Testimonial />
          <ContactForm />
          <Blog />
          <Footer />
          {/* <BurgerMenu isOpen={showMenu} /> */}
          {/* <CourseCarousel width={width} /> */}
        </LazyLoad>
      </div>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Home;
