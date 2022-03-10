import "../ContactMe/ContactMe.scss";
import map from "../../assets/map.png";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ContactMe() {
  function sendEmail(e) {
    console.log(e);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dfmdol6",
        "template_xr40a7l",
        e.target,
        "user_FgOIAYyl9oNSUlLrdBA5T"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="contact__wrapper">
      <contact className="contact">
        <div>
          <h3 className="contact__title">Contact Me</h3>
          <p className="contact__summary">
            Please reach out to me with any questions and I'll be sure to
            contact you back as soon as possible
          </p>
          <form className="contact__form" onSubmit={sendEmail}>
            <div className="contact__info">
              <input
                type="text"
                className="form-control contact__name"
                id="name"
                name="name"
                placeholder="Name"
              />
              <label htmlFor="name"></label>
              <input
                type="email"
                className="form-control contact__email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <label htmlFor="name"></label>
            </div>
            <div className="contact__desc">
              <input
                type="text"
                className="form-control contact__subject"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <label htmlFor="name"></label>
              <input
                type="text"
                className="form-control contact__fulldesc"
                id="description"
                name="description"
                placeholder="Description"
              />
              <label htmlFor="name"></label>
            </div>
            <button
              type="submit"
              value="Send"
              className="contact__btn"
              variant="primary"
              onClick={handleShow}
            >
              Send Message
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Message Sent!!</Modal.Title>
              </Modal.Header>
              <Modal.Body>Your Message Has Been Sent!!</Modal.Body>
              <Modal.Body>I'll Be In Contact You Shortly.</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
        <img src={map} alt="map" className="contact__map"></img>
      </contact>
    </div>
  );
}

export default ContactMe;
