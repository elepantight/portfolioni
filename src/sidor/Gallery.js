import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="row card-row-1">
            <div className="img-card">

              <img
                className="images"
                src={require("./../images/ftp.jpg")}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/guzz.jpg")}
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
            <div className="row card-row-2">
              <div className="img-card">

                <img
                  className="images"
                  src={require("./../images/mumin.jpg")}
                  alt="img"
                />
              </div>
              <div className="img-card">
                <img
                  className="images"
                  src={require("./../images/Elonmusk.jpg")}
                  alt="img"
                />
              </div>
              <div className="img-card">
                <img
                  className="images"
                  src={require("./../images/trikk.jpg")}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row card-row-3">
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/bageriet.png")}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/hands.png")}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={require("./../images/dudes.jpg")}
                alt="img"
              />
            </div>
            <div className="row card-row-4">
              <div className="img-card">
                <img
                  className="images"
                  src={require("./../images/2DarthMaulRasta.jpg")}
                  alt="img"
                />
              </div>
              <div className="img-card">
                <img
                  className="images"
                  src={require("./../images/unknown.png")}
                  alt="img"
                />
              </div>
              <div className="img-card">
                <img
                  className="images"
                  src={require("./../images/viva-logo.jpg")}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
