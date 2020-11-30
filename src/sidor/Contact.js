import React from "react";
import emailjs from "emailjs-com";
import background from "./../images/background.svg";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_test",
        e.target,
        "user_nzRUlAOVwi3RNtg0sXepQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section>
      <div styles={{ backgroundImage: `url(${background})` }}></div>
      <div className="contact-form" onSubmit={sendEmail}>                  
        <form action="index.html">
          <h3 className="title">Contact</h3>
          <div className="input-container">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label htmlFor=""></label>
            <span>Username</span>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label htmlFor=""></label>
            <span>Email</span>
          </div>

          <div className="input-container textarea">
            <textarea
              name="message"
              className="input"
              placeholder="Message"
            ></textarea>
            <label htmlFor=""></label>
            <span>Message</span>
          </div>
          <input type="submit" value="Send" className="btn btn-3" />
        </form>
      </div>
    </section>
  );
}
