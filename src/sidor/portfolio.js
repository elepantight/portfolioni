import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <img
                className="card-img"
                src={require("./../images/GOT-start.jpg")}
                alt="img"
              />
              <h1 className="card-text">
                Game Of Thrones Board Game
              </h1>
              <p>
                Semester Project. Board Game made in JavaScript
              </p>
              <button className="btn btn-1">
                View Project
              </button>
              <button className="btn btn-2">
                View Code
              </button>
            </div>
            <div className="card">
              <img
                className="card-img"
                src={require("./../images/GOT-start.jpg")}
                alt="img"
              />
              
            </div>
            <div className="card">
              <img
                className="card-img"
                src={require("./../images/GOT-start.jpg")}
                alt="img"
              />
            </div>
          </div>
        </div>
        <p>Enter your HTML here</p>
      </div>
    );
  }
}
