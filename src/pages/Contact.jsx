import React from "react";

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
        <form action="">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
          />

          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Subject"
          />

          <div className="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Send Message!
          </button>
        </form>

        <div className="col">
          <h1>MAP HERE</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
