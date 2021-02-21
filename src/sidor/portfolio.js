import React, {  useRef, useEffect } from "react";
import Scroll from "./../component/scroll";

import {TweenMax, Power1, Power2, Power3, Bounce, Elastic} from 'gsap';


import GOT from './../images/GOT-start.jpg';
import HOMEFAIR from './../images/homefair.jpg';
import BESSEGGEN from './../images/beseggen.jpg';
import SPORTIF from './../images/sportif.jpg';
import RICKMORTY from './../images/rick.jpg';
import GAME from './../images/game.jpg';
import COOLBEANS from './../images/cool.jpg';
import SPORTIF2 from './../images/sportif2.jpg';
import BESSEGGEN2 from './../images/bestype.jpg';
import PORTFOLIO from './../images/portfolio.jpg';
import BERGENLODGE from './../images/bergenlodge.jpg';
import TRA from './../images/Tra.PNG';
import VIVA from './../images/viva.jpg';

function Portfolio () {
  let logoItem = useRef(null);

useEffect(() => {
  console.log(logoItem);
  TweenMax.from(
    logoItem,
    1,
    {
      opacity:1,
      x: -1000,
      y: 0,
    }
  )
  TweenMax.to(
    logoItem,
    1,
    {
      opacity:1,
      x: 0,
      y: 0,
      ease: Power1.easeIn
    
    }
  )
}, [])

 
    return (
      /* should change row with container and css */
      <div className="header-box">
        <Scroll showBelow={250} />
        <div className="animated-title">
          <div className="text-top">
            <div>
              <span>Recent</span>
              <span>Projects &amp;</span>
            </div>
          </div>
          <div className="text-bottom">
            <div>Prototypes</div>
          </div>
        </div>
        <div className="row-card">
          {" "}
          {/* container */}
          <div className="container" ref={el => {logoItem = el}}>
            {" "}
            {/*row */}
            <div className="card">
              <div className="content">
                <h2>Game Of Thrones Board Game</h2>
                <img
                
                  className="card-img"
                  src={GOT}
                  alt="img"
                />
                <h3>JavaScript</h3>
                <p>Semester Project. Board Game made with JavaScript</p>

                <a
                  href="https://github.com/elepantight/GameOfThronesBoardGame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-1"
                >
                  Github
                </a>
                <a
                  href="https://gameofthronesboardgame.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-1"
                >
                  live
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>HomeFair Website</h2>
                <img
                  className="card-img"
                  src={HOMEFAIR} // FIGURE OUT WHY src={require("./../images/homefair.jpg")} ISNT WORKING
                  alt="img"
                />
                <h3>HTML/CSS</h3>
                <p>Semester Project. Website made with HTML and CSS</p>

                <a
                  href="https://github.com/elepantight/homefair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-1"
                >
                  Github
                </a>
                <a
                  href="https://homefair.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-1"
                >
                  live
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Besseggen Arkitekter</h2>
                <img
                  className="card-img"
                  src={BESSEGGEN}
                  alt="img"
                />
                <h3>HTML/CSS</h3>
                <p>Semester Project. Webpage for HomeFair. </p>

                <a
                  href="https://github.com/elepantight/Besseggen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-1"
                >
                  Github
                </a>
                <a
                  href="https://besseggen.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-1"
                >
                  live
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Sportif Unlimited</h2>
                <img
                  className="card-img"
                  src={SPORTIF}
                  alt="img"
                />
                <h3>HTML/CSS</h3>
                <p>Semester Project. Website for Sportif Unlimited</p>

                <a
                  href="https://github.com/elepantight/Sportif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-1"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Rick and Morty API</h2>
                <img
                  className="card-img"
                  src={RICKMORTY}
                  alt="img"
                />
                <h3>React.js</h3>
                <p>
                  Semester Project. API fetching character from Rick N' Morty
                </p>

                <a
                  href="https://github.com/elepantight/rickmorty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-1"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Game App </h2>
                <img
                  className="card-img"
                  src={GAME}
                  alt="img"
                />
                <h3>React.js</h3>
                <p>Semester Project. Game-API </p>

                <a
                  href="https://github.com/elepantight/game-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-1"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Prototype Cool Beanz</h2>
                <img
                  className="card-img"
                  src={COOLBEANS}
                  alt="img"
                />
                <h3>Adobe Xd</h3>
                <p>Semester Project. Prototype for a cold-brew company.</p>
                <a
                  href="https://xd.adobe.com/view/43024c38-6a75-4a4e-6937-ce95fba0cf0d-3533/?fullscreen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-2"
                >
                  Desktop
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Sportif Unlimited</h2>
                <img
                  className="card-img"
                  src={SPORTIF2}
                  alt="img"
                />
                <h3>Adobe Xd</h3>
                <p>Semester Project. Prototype for Sportif Unlimited</p>

                <a
                  href="https://xd.adobe.com/view/bbfae16d-d6cb-4f7c-6f20-4760f2325f30-cdcb/?fullscreen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-2"
                >
                  Desktop
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Besseggen Arkitekter</h2>
                <img
                  className="card-img"
                  src={BESSEGGEN2}
                  alt="img"
                />
                <h3>Adobe Xd</h3>
                <p>Semester Project. Prototype for Besseggen Arkitekter</p>
                <a
                  href="https://xd.adobe.com/view/b151078a-3966-4df6-6644-02f7a6c773a2-c760/?fullscreen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-2"
                >
                  Desktop
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Viva Sativa Movement</h2>
                <img
                  className="card-img"
                  src={VIVA}
                  alt="img"
                />
                <h3>Adobe Xd</h3>
                <p>Semester Project. Prototype for Viva Sativa Movement</p>
                <a
                  href="https://xd.adobe.com/view/43024c38-6a75-4a4e-6937-ce95fba0cf0d-3533/grid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-2"
                >
                  Desktop
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>My Portfolio</h2>
                <img
                  className="card-img"
                  src={PORTFOLIO}
                  alt="img"
                />
                <h3>Adobe Xd</h3>
                <p>Semester Project. Prototype for my portfolio</p>
                <a
                  href="https://xd.adobe.com/view/43024c38-6a75-4a4e-6937-ce95fba0cf0d-3533/grid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-2"
                >
                  Desktop
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Bergen Lodge</h2>
                <img
                  className="card-img"
                  src={BERGENLODGE}
                  alt="img"
                />
                <h3>Adobe Xd</h3>
                <p>Semester Project. Prototype for hotel agency</p>
                <a
                  href="https://xd.adobe.com/view/11fefd2c-93fb-4d0b-5647-53de37d6d793-67cf/screen/1b2680fa-b9ed-41c5-ac4e-617db9e2815e?fullscreen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-2"
                >
                  Desktop
                </a>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2>Trä och Miljö</h2>
                <img
                  className="card-img"
                  src={TRA}
                  alt="img"
                />
                <h3>Adobe Xd</h3>
                <p>Prototype</p>
                <a
                  href="https://xd.adobe.com/view/0fcc3074-a784-4df4-6c3e-f200f80db5f1-79fd/?fullscreen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-2"
                >
                  Desktop
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Portfolio;
