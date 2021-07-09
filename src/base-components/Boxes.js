import React, { useState } from "react";
import SocialMedia from "./SocialMedia";
import BeforeDivBoxes from "./BeforeDivBoxes";

function Boxes(props) {
    const [socialMedia , setSocialMedia] =useState(props.socialmedia)
    const[upordown,setUpordown] = useState(props.rateicon)    
    let ratesColor="";
    {upordown==='down'? ratesColor='hsl(356, 69%, 56%)':ratesColor="hsl(163, 72%, 41%)"}

   
  return (
    <div className="boxes">
      <BeforeDivBoxes  socialMedia={socialMedia}/>
      <div className="social-media-username">
        
         <SocialMedia socialMedia={socialMedia} />
        
        <p>{props.username} </p>
      </div>
      <div className="followers">
        <h1>{props.followers}</h1>
        <p>Followers</p>
      </div>
      <div className="rates">
        {
          upordown === "down"? 
          <p className="down">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path fill="hsl(356, 69%, 56%)" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
          </svg>
        </p>:
        <p className="up">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
          <path fill="hsl(163, 72%, 41%)" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
        </svg>
      </p>
        }
        
        <p style={{color: ratesColor }}>{props.rates} </p>
      </div>
    </div>
  );
}

export default Boxes;
