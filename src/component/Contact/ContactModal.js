import React from "react";
import "./Contact.css"

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const ContactModal = (show, setShow) => {
  const handleClose = () => setShow(false);

  return(
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ContactModal;