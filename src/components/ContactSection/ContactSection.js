import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="">
      <section>
        <div className="container-fluid text-center" id="contact">
          <h1 className="section-headline">Contact</h1>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
