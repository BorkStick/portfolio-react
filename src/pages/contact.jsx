import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ContactForm />

        <div className="col">
          <h1>MAP HERE</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
