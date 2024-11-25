import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingTop: "50px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div
              className="p-4 shadow rounded"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e9ecef",
              }}
            >
              <h1 className="text-center mb-4" style={{ fontWeight: "700", color: "#343a40" }}>
                Contact Us
              </h1>
              <p className="text-center text-muted mb-5">
                Have a question, feedback, or want to get in touch? Fill out the form below, and
                we’ll respond promptly.
              </p>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label style={{ fontWeight: "600", color: "#495057" }}>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    style={{
                      borderRadius: "8px",
                      borderColor: "#ced4da",
                    }}
                    required
                  />
                </Form.Group>
                <br />

                <div className="mb-4"></div>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label style={{ fontWeight: "600", color: "#495057" }}>
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      borderRadius: "8px",
                      borderColor: "#ced4da",
                    }}
                    required
                  />
                </Form.Group>

                    <br />
                <div className="mb-4"></div>

                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label style={{ fontWeight: "600", color: "#495057" }}>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    style={{
                      borderRadius: "8px",
                      borderColor: "#ced4da",
                    }}
                    required
                  />
                </Form.Group>
                      <br />
                <div className="mb-4"></div>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label style={{ fontWeight: "600", color: "#495057" }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message here"
                    style={{
                      borderRadius: "8px",
                      borderColor: "#ced4da",
                    }}
                    required
                  />
                </Form.Group>
<br />
                <div className="mb-4"></div>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "8px",
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
