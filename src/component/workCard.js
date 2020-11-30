import React from "react";

function WORK({ jobben, index, toggleWORK }) {
  return (
    <div
      className={"jobben " + (jobben.open ? "open" : "")}
      key={index}
      onClick={() => toggleWORK(index)}
    >
      <div className="work-question">{jobben.question}</div>
      <div className="work-answer">{jobben.answer}</div>
    </div>
  );
}

export default WORK;
