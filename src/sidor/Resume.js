import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Resume = () => {
  return (
    <>
    <img
    className="background-img"
    src={require("./../images/cubez.svg")}
    alt="img"
  />
    <div className="konstruktion">
               

   <TypeWriterEffect
            textStyle={{
              frontFamily: 'Nixie One',
              color: "#0d3e69",
              fontSize: "1em",
            }}
            startDelay={100}
            cursorColor="#197acf"
            multiText={[
              "Well, I'm building a highway back",
              "Back to the heart of things",
              "No love left to walk back",
              "Back to the heart of things",
              "So, I'm building above and back",
            ]}
            typeSpeed={100}
            hideCursorAfterText={true}
          />
  </div>
  </>
  );
};

export default Resume;
