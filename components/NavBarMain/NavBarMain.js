import React, { useState, useEffect, useContext } from "react";
import styles from "./NavBarMain.module.css";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import toggleContext from "../../context/context";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Nav, Navbar, Container, Image, Form } from "react-bootstrap";

function NavBarMain({ addClass }) {
  const [scrolled, setScrolled] = useState(false);

  const { showMenu, setshowMenu } = useContext(toggleContext);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  // `navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${styles.scrolled}`

  let x = [styles.nav_mm, "display_xs"];
  if (scrolled) {
    x.push(styles.scrolled);
  }

  let xs = [styles.nav_mm, "displayon_xs"];
  if (scrolled) {
    xs.push(styles.scrolled);
  }

  return (
    <div>
      <Navbar expand="lg" className={styles.cap}>
        <Container>
          <Nav className="ml-auto">
            <Nav.Link
              className="text-white pd-r-15"
              style={{ padding: "0.5rem 1rem" }}
              href="https://mindmajix.com/corporate-training"
            >
              Corporate Training
            </Nav.Link>
            <Nav.Link
              className="text-white pd-r-25 "
              style={{ padding: "0.5rem 1rem" }}
              href="https://mindmajix.com/instructor"
            >
              Become an Instructor
            </Nav.Link>
            <Nav.Link
              className="text-white ml-auto"
              style={{ padding: "0.5rem 1rem" }}
              href="https://mindmajix.com/blog"
            >
              Blog
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar expand="lg" className={x.join(" ")}>
        <Container>
          <Navbar.Brand href="https://mindmajix.com">
            <Image
              src="images/logo-d.svg"
              alt="logo-MindMajix"
              style={{ width: "200px", height: "100%" }}
            />
          </Navbar.Brand>

          <ul className="navbar-nav ml-auto">
            {scrolled ? (
              <li className="pd-r-15">
                <Form>
                  <Form.Group
                    controlId="exampleForm.ControlInput1 text-white"
                    style={{ margin: "0" }}
                  >
                    <Form.Control
                      className={styles.search_bar}
                      type="text"
                      placeholder="Search Courses"
                      style={{ color: "white" }}
                    />
                  </Form.Group>
                </Form>
              </li>
            ) : null}
            <li
              className="pd-r-15"
              onClick={() => {
                setshowMenu(true);
              }}
            >
              <Nav.Link className="text-white  btn-outline-primary py-2 px-4">
                <RiMenuUnfoldFill
                  className={`text-white ${styles.course_icon}`}
                />
                Courses
              </Nav.Link>
            </li>

            <Nav.Link className="text-white" href="https://mindmajix.com/login">
              Login | Register
            </Nav.Link>
          </ul>
        </Container>
      </Navbar>
      <Navbar className={xs.join(" ")} style={{ display: "none" }}>
        <Container>
          <ul className="ml-auto" style={{ display: "contents" }}>
            <li
              onClick={() => {
                setshowMenu(true);
              }}
            >
              <Nav.Link
                className="btn-outline-mm text-white"
                style={{ padding: "0" }}
              >
                <RiMenuUnfoldFill
                  className={`text-white ${styles.course_icon}`}
                />
              </Nav.Link>
            </li>

            {scrolled ? (
              <li>
                <Form>
                  <Form.Group
                    controlId="exampleForm.ControlInput1 text-white"
                    style={{ margin: "0" }}
                  >
                    <Form.Control
                      className={styles.search_bar}
                      type="text"
                      placeholder="Search Courses"
                      style={{ color: "white" }}
                    />
                  </Form.Group>
                </Form>
              </li>
            ) : (
              <li>
                <a href="https://mindmajix.com">
                  <Image
                    src="images/logo-d.svg"
                    alt="logo-MindMajix"
                    style={{ width: "160px", height: "100%" }}
                  />
                </a>
              </li>
            )}
            <li>
              <a
                href="https://mindmajix.com/login"
                className="nav-link text-white"
                style={{ padding: "0" }}
              >
                <AiOutlineUser className={`text-white ${styles.course_icon}`} />
              </a>
            </li>
          </ul>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarMain;
