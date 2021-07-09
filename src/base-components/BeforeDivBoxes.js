import React from "react";

function BeforeDivBoxes(props) {
  let beforeDivColor = "";

  if (props.socialMedia === "facebook") {
    beforeDivColor = "hsl(208, 92%, 53%)";
  } else if (props.socialMedia === "instagram") {
    beforeDivColor =
      "linear-gradient(to right,hsl(37, 97%, 70%),hsl(329, 70%, 58%))";
  } else if (props.socialMedia === "twitter") {
    beforeDivColor = "hsl(203, 89%, 53%)";
  } else {
    beforeDivColor = "hsl(348, 97%, 39%)";
  }

  return (
   
      <div
        style={{ background: beforeDivColor }}
        className="boxes-before"
      ></div>
    
  );
}

export default BeforeDivBoxes;
