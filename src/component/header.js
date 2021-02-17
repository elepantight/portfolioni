import React, {useRef, useEffect} from "react";

import {TweenMax, Power1, Power2, Power3, Bounce, Elastic, } from 'gsap';



function Header() {

  let logoItem = useRef(null);

useEffect(() => {
  console.log(logoItem);
  TweenMax.to(
    logoItem,
    1,
    {
      opacity:1,
      y: -10,
      ease: Power3.easeOut
    }
  )
}, [3000])






  return (
    <header id="no-copy">
      <div className="horizontal"></div>
      <div className="vertical"></div>
     <div className="container container_header">
       <div className="row_header">
         <div className="primary_title">
           <span className="block" ></span>
           <h1 className="text_name">Arvid Hallberg<span ref={el => {logoItem = el}}></span></h1>
         </div>
         <div className="second_title">
           <div className="block"></div>
             <h4>FRONTEND LIKES DESIGN.</h4>

         </div>
       </div>
     </div>
     
     <div className="header_image">
     <img
                className="header-image"
                src={require("./../images/planet_grey.svg")}
                alt="img"
              />
     </div>
    </header>
  );
}

export default Header;
