import React, { Component } from "react";
import { HEROKU_BYPASS_CORS } from "./../constants/constants";
import axios from "axios";

export default class Contact extends Component {
  state = {
    Firstname: "",
    Surname: "",
    Email: "",
    Message: "",
    FirstnameError: true,
    LastnameError: true,
    EmailError: true,
    MessageError: true,
  };

  handleChange = (input) => {
    let name = input.target.name;
    let value = input.target.value;
    let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    switch (name) {
      case "Firstname":
        value !== ""
          ? this.setState({ FirstnameError: false })
          : this.setState({ FirstnameError: true });
        break;
      case "Lastname":
        value !== ""
          ? this.setState({ LastnameError: false })
          : this.setState({ LastnameError: true });
        break;
      case "Email":
        emailPattern.test(value)
          ? this.setState({ EmailError: false })
          : this.setState({ EmailError: true });
        break;
      case "Message":
        value !== ""
          ? this.setState({ MessageError: false })
          : this.setState({ MessageError: true });
        break;
      default:
        break;
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { Firstname, Surname, Email, Message } = this.state;
    axios
      .post(HEROKU_BYPASS_CORS + "Contacts", {
        Name: Firstname,
        Surname: Surname,
        Email: Email,
        Message: Message,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {
      FirstnameError,
      LastnameError,
      EmailError,
      MessageError,
    } = this.state;
    return (
      <>
        <div className="row contact-row">
          <div className="col-sm-6 contact">
            <form onSubmit={this.handleSubmit}>
              <div className="contact-1">
                <input
                  type="text"
                  name="Firstname"
                  onChange={this.handleChange}
                  className="contact-form"
                  placeholder="Firstname"
                />
                <p className={FirstnameError ? "error" : "error__hide"}>
                  {" "}
                  error{" "}
                </p>
              </div>
              <br />

              <div className="contact-2">
                <input
                  type="text"
                  name="Lastname"
                  onChange={this.handleChange}
                  className="contact-form"
                  placeholder="Lastname"
                />
                <p className={LastnameError ? "error" : "error__hide"}>
                  error{" "}
                </p>
              </div>
              <br />
              <div className="col-sm-6 contact">
                <div className="contact-3">
                  <input
                    type="text"
                    name="Email"
                    onChange={this.handleChange}
                    className="contact-form"
                    placeholder="Email"
                  />
                  <p className={EmailError ? "error" : "error__hide"}>error </p>
                </div>
                <br />
                <div className="contact-4">

                  <textarea
                    name="Message"
                    onChange={this.handleChange}
                    className="contact-form"
                    placeholder="Drop a Message"
                  />
                  <p className={MessageError ? "error" : "error__hide"}>
                    error
                  </p>
                  <br />
                  <input
                    value="Send"
                    type="submit"
                    disabled={
                      FirstnameError ||
                      LastnameError ||
                      EmailError ||
                      MessageError
                    }
                    className="btn-contact"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
