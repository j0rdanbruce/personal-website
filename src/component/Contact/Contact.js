import React from "react";
import "./Contact.css"

//import letter png here
import letter from "../../Images/letter.png"

const ContactMe = () => {

  return(
    <button className="contact-btn">Contact Me <span><img className="letter-logo" src={letter} alt="" /></span></button>
  );
}

export default ContactMe;