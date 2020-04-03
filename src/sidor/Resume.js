import React, { useState } from "react";
import EDU from "../component/eduCard";
import WORK from "../component/workCard";

function ResumeComponent() {
  const [studie, setStudierna] = useState([
    {
      question: "FrontEnd Development | Noroff, Oslo  |  2018-2020",
      answer: "Currently studying FrontEnd Development at Noroff.",
      open: false,
    },
    {
      question: "Computer Technology | NTI | 2014-2016",
      answer: "Online course in Computer Technology at NTI.",
      open: false,
    },
    {
      question: "Computer Coordination and Support | NTI | 2014-2016",
      answer: "Online course in Computer Coordination and Support at NTI.",
      open: false,
    },
    {
      question: "Network Technology | NTI | 2014-2016",
      answer: "Network Technology. ",
      open: false,
    },
    {
      question:
        "Administration Of Network and Server Equipment | NTI | 2014-2016",
      answer:
        "Online course in Administration Of Network and Server Equipment at NTI.",
      open: false,
    },
    {
      question: "Network Administration | NTI | 2014-2016",
      answer: "Online course in Network Administration at NTI.",
      open: false,
    },
    {
      question:
        "Social Science and Economics | Klara Gymnasium, Linköping  |  2008-2011",
      answer: " 3 year highschool education",
      open: false,
    },
  ]);

  const toggleEDU = (index) => {
    setStudierna(
      studie.map((studier, i) => {
        if (i === index) {
          studier.open = !studier.open;
        } else {
          studier.open = false;
        }
        return studier;
      })
    );
  };

  const [jobb, setJobben] = useState([
    {
      question: "IT technician | Subway  Norge  |  2019-Present",
      answer:
        "Lucas ipsum dolor sit amet chommell ithorian biggs sullustan desann anakin tambor saché b4-d4 kasan. ",
      open: false,
    },
    {
      question: "Kitchen Chief | Jensens Böfhus | 2017-Present",
      answer:
        "Lucas ipsum dolor sit amet chommell ithorian biggs sullustan desann anakin tambor saché b4-d4 kasan. ",
      open: false,
    },
    {
      question: "Warehouse Employee | Coca Cola | 2015-2016",
      answer:
        "Lucas ipsum dolor sit amet chommell ithorian biggs sullustan desann anakin tambor saché b4-d4 kasan. ",
      open: false,
    },
    {
      question: "Warehouse Employee | Coop | 2013-2014",
      answer:
        "Lucas ipsum dolor sit amet chommell ithorian biggs sullustan desann anakin tambor saché b4-d4 kasan. ",
      open: false,
    },
    {
      question: "Warehouse Employee  | Tine Meijeri | 2012-2013",
      answer:
        "Lucas ipsum dolor sit amet chommell ithorian biggs sullustan desann anakin tambor saché b4-d4 kasan.",
      open: false,
    },
    {
      question: "Salesman | Fjordkraft | 2011",
      answer:
        "Lucas ipsum dolor sit amet chommell ithorian biggs sullustan desann anakin tambor saché b4-d4 kasan. ",
      open: false,
    },
    {
      question: "Postman | Posten |  2010-2011",
      answer:
        "Lucas ipsum dolor sit amet chommell ithorian biggs sullustan desann anakin tambor saché b4-d4 kasan. ",
      open: false,
    },
  ]);

  const toggleWORK = (index) => {
    setJobben(
      jobb.map((jobben, i) => {
        if (i === index) {
          jobben.open = !jobben.open;
        } else {
          jobben.open = false;
        }
        return jobben;
      })
    );
  };

  return (
    <div className="container resume">
      <div className="row resume-row">
        <div className="col-sm-12 profil">
          <h1 className="info-text about">About Me</h1>
          <hr></hr>

          <p className="about-text">
            {" "}
            My Name is Arvid. I've lived in Oslo for the last 10 years but i'm
            originally from Sweden. I work as a kitchen chief. Currently
            studying FrontEnd Development. Likes design
          </p>
          <img
            className="resume-img"
            src={require("./../images/me.svg")}
            alt="img"
          />
        </div>
        <hr className="hr-edu"></hr>
        <div className="col-sm-6 utbildning">
          <h1 className="info-text-edu">Education</h1>
          <div className="studie">
            {studie.map((studier, i) => (
              <EDU index={i} studier={studier} toggleEDU={toggleEDU} />
            ))}
          </div>
        </div>
        <div className="col-sm-6 skola">
        <h1 className="info-text-edu">Work Experience</h1>
          <div className="jobb">
            {jobb.map((jobben, i) => (
              <WORK index={i} jobben={jobben} toggleWORK={toggleWORK} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeComponent;
