import React, { useState } from "react";
import SocialMedia from "./SocialMedia";

function OverViewBoxes(props) {
  const [socialMedia , setSocialMedia] =useState(props.socialmedia)
  const [upordown, setUpordown] = useState(props.upordown);
  let ratesColor = "";
  {upordown === "up" ?  ratesColor = "hsl(163, 72%, 41%)" :  ratesColor = "hsl(356, 69%, 56%)"}
  return (
    <div className="over-view-box">
      <p className="page-views">{props.details}</p>
      <p className="social-media-icon">
        <SocialMedia socialMedia={socialMedia}/>
      </p>
      <h1 className="count">{props.count}</h1>
      <div className="rates-over-view">
        
        {upordown === "down"? 
          <p className="down">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path fill="hsl(356, 69%, 56%)" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
          </svg>
        </p>
        :
        <p className="up">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
          <path fill="hsl(163, 72%, 41%)" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
        </svg>
      </p>
        } 

        <p style={{ color: ratesColor }}>{props.percentage}% </p>
      </div>
    </div>
  );
}

export default OverViewBoxes;
