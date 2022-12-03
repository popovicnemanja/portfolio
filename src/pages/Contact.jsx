import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container contact__container">
        <h1 className="section__title">Contact</h1>
        <form
          method="POST"
          action="https://getform.io/f/2f2f4ea5-5d86-4b38-bd1d-2752c68e4bdd"
          className="contact__form"
        >
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Name"
            className="input"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="input"
          ></textarea>
          <button className="btn contact__btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
