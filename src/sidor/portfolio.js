import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      /* should change row with container and css */
     <div className="header-box">
<div class="animated-title">
  <div class="text-top">
    <div>
      <span>Recent</span>
      <span>Projects&</span>
    </div>
  </div>
  <div class="text-bottom">
    <div>Prototypes</div>
  </div>
</div>
      <div className="row row-card">
        
        {" "}
        {/* container */}
        <div className="container">
          {" "}
          {/*row */}
          <div className="card">
            <div className="content">
              <h2>Game Of Thrones Board Game</h2>
              <img
                className="card-img"
                src={require("./../images/GOT-start.jpg")}
                alt="img"
              />
              <h3>JavaScript</h3>
              <p>Semester Project. Board Game made with JavaScript</p>

              <a
                href="https://github.com/elepantight/homefair"
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
              <h2>HomeFair Website</h2>
              <img
                className="card-img"
                src={require("./../images/homefair.jpg")}
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
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2>Besseggen Arkitekter</h2>
              <img
                className="card-img"
                src={require("./../images/beseggen.jpg")}
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
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2>Sportif Unlimited</h2>
              <img
                className="card-img"
                src={require("./../images/sportif.jpg")}
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
                src={require("./../images/rick.jpg")}
                alt="img"
              />
              <h3>React.js</h3>
              <p>Semester Project. API fetching character from Rick N' Morty</p>

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
                src={require("./../images/game.jpg")}
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
                src={require("./../images/cool.jpg")}
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
                src={require("./../images/sportif2.jpg")}
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
                src={require("./../images/bestype.jpg")}
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
                src={require("./../images/viva.jpg")}
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
                src={require("./../images/portfolio.jpg")}
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
                src={require("./../images/bergenlodge.jpg")}
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
                src={require("./../images/Tra.PNG")}
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
}
