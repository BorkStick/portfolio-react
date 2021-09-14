import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="">
      <section>
        <div className="container-fluid text-center" id="contact">
          <h1 className="section-headline">Contact</h1>
          <form className="px-5">
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label>Example textarea</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
