import React from "react";
import OverViewBoxes from "../base-components/OverViewBoxes";

function SecondHero() {
  return (
    <div className="second-hero">
      <h1 className="overview-today">Overview - Today</h1>
      <div className="second-hero-second-part">
        <OverViewBoxes
          upordown="up"
          details="Page Views"
          socialmedia="facebook"
          count="87"
          percentage="3"
        />
        <OverViewBoxes
          upordown="down"
          details="Likes"
          socialmedia="facebook"
          count="52"
          percentage="2"
        />
        <OverViewBoxes
          upordown="up"
          details="Likes"
          socialmedia="instagram"
          count="5462"
          percentage="2257"
        />
        <OverViewBoxes
          upordown="up"
          details="Profile Views"
          socialmedia="instagram"
          count="52k"
          percentage="1375"
        />
        <OverViewBoxes
          upordown="up"
          details="Retweets"
          socialmedia="twitter"
          count="117"
          percentage="303"
        />
        <OverViewBoxes
          upordown="up"
          details="Likes"
          socialmedia="twitter"
          count="507"
          percentage="553"
        />
        <OverViewBoxes
          upordown="down"
          details="Likes"
          socialmedia="youtube"
          count="107"
          percentage="19"
        />
        <OverViewBoxes
          upordown="down"
          details="Total Views"
          socialmedia="youtube"
          count="1407"
          percentage="12"
        />
      </div>
    </div>
  );
}

export default SecondHero;
