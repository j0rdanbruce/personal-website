import React, { useState } from "react";
import "./Contact.css";

//import letter png here
import letter from "../../Images/letter.png"

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <button className="contact-btn" onClick={handleShow}>Contact Me <span><img className="letter-logo" src={letter} alt="" /></span></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Send Message</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact;