import React, { Component } from "react";
import Scroll from "./../component/scroll";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="img-column">
        <Scroll showBelow={250} />
          <div className="card-row-1">
          <div className="img-card">
              <img
                className="images"
                src={require("./../images/rubiksgun.svg")}
                alt="img"
              />
            </div>
          <div className="img-card">
              <img
                className="images"
                src={require("./../images/gunman.svg")}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/samuraj.svg")}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/viva-logo.svg")}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/blacKnWhite.svg")}
                alt="img"
              />
            </div>
            <div className="card-row-2">
              <div className="img-card">
                <img
                  className="images"
                  src={require("./../images/dudes.svg")}
                  alt="img"
                />
              </div>
              <div className="img-card">
                <img
                  className="images"
                  src={require("./../images/2d.svg")}
                  alt="img"
                />
              </div>
              <div className="img-card">
                <img
                  className="images"
                  src={require("./../images/mumin.svg")}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="card-row-3">
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/dragonfly.svg")}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/guzz.svg")}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/ftp.svg")}
                alt="img"
              />
            </div>
            <div className="card-row-4">
            </div>
          </div>
        </div>
      </>
    );
  }
}
