import React from "react";

export default function ContactForm() {
  return (
    <div>
      <form
        action="https://formsubmit.co/4614eda7978c8a89c22c4e4063d08df0"
        method="POST"
      >
        <input
          type="text"
          name="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Email"
        />

        <input
          type="text"
          name="subject"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Subject"
        />

        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Send Message!
        </button>
      </form>
    </div>
  );
}
