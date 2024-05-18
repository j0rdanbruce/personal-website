import React, { useState } from "react";
import "./Contact.css";

//import letter png here
import letter from "../../Images/letter.png"

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

import emailjs from '@emailjs/browser';


const Contact = () => {
  const [show, setShow] = useState(false);
  const [emailData, setEmailData] = useState({
    from_name: null,
    message: null,
    from_email: null
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (event) => {
    emailjs
      .send('service_ke9mnii', 'template_op5rk19', emailData, {
        publicKey: 'WPoUEVHRHEyu7GjoG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleContactBtnClick = (event) => {
    event.preventDefault();
    
    sendEmail();
    handleClose();
  }

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
            <Form.Group className="mb-3" controlId="from_name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder=""
                value={emailData.from_name}
                onChange={e => setEmailData({...emailData, from_name: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="reply_to">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder=""
                value={emailData.from_email}
                onChange={e => setEmailData({...emailData, from_email: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3}
                value={emailData.message}
                onChange={e => setEmailData({...emailData, message: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleContactBtnClick}>Send Message</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact;