import React, { Component } from "react";
import Scroll from "./../component/scroll";



import RUBIK from './../images/rubiksgun.svg';
import GUNMAN from './../images/gunman.svg';
import SAMURAJ from './../images/samuraj.svg';
import VIVALOGO from './../images/viva-logo.svg';
import BLACKWHITE from './../images/blacKnWhite.svg';
import DUDES from './../images/dudes.svg';
import TWOD from './../images/2d.svg';
import MUMIN from './../images/mumin.svg';
import DRAGONFLY from './../images/dragonfly.svg';
import GUZZ from './../images/guzz.svg';
import FTP from './../images/ftp.svg';



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
                src={RUBIK}
                alt="img"
              />
            </div>
          <div className="img-card">
              <img
                className="images"
                src={GUNMAN}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={SAMURAJ}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
              loading="lazy"
                className="images"
                src={VIVALOGO}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
              loading="lazy"
                className="images"
                src={BLACKWHITE}
                alt="img"
              />
            </div>
            <div className="card-row-2">
              <div className="img-card">
                <img
                loading="lazy"
                  className="images"
                  src={DUDES}
                  alt="img"
                />
              </div>
              <div className="img-card">
                <img
                loading="lazy"
                  className="images"
                  src={TWOD}
                  alt="img"
                />
              </div>
              <div className="img-card">
                <img
                loading="lazy"
                  className="images"
                  src={MUMIN}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="card-row-3">
            <div className="img-card">
              <img
                className="images"
                src={DRAGONFLY}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={GUZZ}
                alt="img"
              />
            </div>
            <div className="img-card">
              <img
                className="images"
                src={FTP}
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
