import React, { useState, useEffect, useLayoutEffect } from "react";
import { Card, Image } from "react-bootstrap";
import styles from "./PopularCategories.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiBookReader } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiMacbookLine } from "react-icons/ri";

function PopularCategories({ width, height }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="Automation Testing"
            src="/images/1.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/automation-testing-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Automation Testing
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="/images/2.svg"
            style={{ width: "40px", height: "40px" }}
            alt="Big Data"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/bigdata-analytics-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>Big Data</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="/images/3.svg"
            style={{ width: "40px", height: "40px" }}
            alt="Business Intelligence & Analytics"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/business-intelligence-and-analytics-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Business Intelligence & Analytics
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="/images/4.svg"
            alt="Cloud Computing"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/cloud-computing-certification-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Cloud Computing
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="/images/1.svg"
            style={{ width: "40px", height: "40px" }}
            alt="Cyber Security & SIEM Tools"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/cyber-security-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Cyber Security & SIEM Tools
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="/images/2.svg"
            style={{ width: "40px", height: "40px" }}
            alt="CI/CD DevOps Tools"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/devops-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              CI/CD DevOps Tools
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="/images/3.svg"
            style={{ width: "40px", height: "40px" }}
            alt="Data Science"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/data-science-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>Data Science</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>

      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="/images/4.svg"
            alt="Programming & Frameworks"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/programming-and-frameworks-certification-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Programming & Frameworks
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>

      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="/images/1.svg"
            alt="Project Management & Methodologies"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/project-management-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Project Management & Methodologies
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>

      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="/images/2.svg"
            alt="Robotic Process Automation (RPA)"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/robotic-process-automation-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Robotic Process Automation (RPA)
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
    </Slider>
  );
}

export default PopularCategories;
