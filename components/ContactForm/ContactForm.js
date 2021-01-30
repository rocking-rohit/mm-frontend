import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import styles from "./ContactForm.module.css";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Address").required("Required"),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <section>
      <h1 className="rohit">Rohit</h1>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="pd-b-25 text-center">
            <p>Meet the Expert Who Can Kickstart Your Career</p>
            <h2 className="mb-4">
              Request a <span className="color_text">Free Demo</span>
            </h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col lg={4} md={4} sm={12} xs={12} className="pd-t-15">
                      <div className="form-group">
                        <Field
                          className="contact_input"
                          // required
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                        />
                        <div style={{ color: "#e21928" }}>
                          <ErrorMessage name="name" />
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={4} sm={12} xs={12} className="pd-t-15">
                      <div className="form-group">
                        <Field
                          className="contact_input"
                          // required
                          type="email"
                          name="email"
                          placeholder="Enter email"
                        />
                        <div style={{ color: "#e21928" }}>
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={4} sm={12} xs={12} className="pd-t-15">
                      <div className="form-group">
                        <Field
                          className={"contact_input form-control"}
                          // required
                          type="text"
                          name="phone"
                          placeholder="Enter Phone number"
                          {...formik.getFieldProps("phone")}
                        />
                        <div style={{ color: "#e21928" }}>
                          <ErrorMessage name="phone" />
                        </div>
                      </div>
                    </Col>

                    <Col lg={12} md={12} sm={12} xs={12} className="pd-t-15">
                      <div className="form-group">
                        <Field
                          className={"contact_input form-control"}
                          as="textarea"
                          rows={3}
                          name="message"
                          placeholder="Enter Message"
                        />
                        <div style={{ color: "#e21928" }}>
                          <ErrorMessage name="message" />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Button
                    variant="primary"
                    className="btn-outline-primary py-2 px-4 m-t-15"
                    type="submit"
                    style={{ float: "right" }}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .contact_input {
            border: none;
            border-bottom: 2px solid grey;
            border-radius: 0;
            background-color: #ffffff00 !important;
          }

          .contact_input:focus {
            border-bottom: 2px solid #e21927;
            box-shadow: none !important;
          }
          .rohit {
            background-color: red;
          }

          .rohit:hover {
            background-color: blue;
          }
        `}
      </style>
    </section>
  );
}

export default ContactForm;
