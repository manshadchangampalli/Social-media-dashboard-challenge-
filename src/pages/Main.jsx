import React, { useState } from "react";
import Header from "../Components/Header";
import FirstHero from "../Components/FirstHero";
import {DorLContext} from "../DorLContext";
import SecondHero from "../Components/SecondHero";

function Main() {
  const [dorlmode, setDorlmode] = useState();
  const darkorlightmode = (dorl) => {
    setDorlmode(dorl);
  };

  return (
    <div
      className={dorlmode?"main light":"main"}
    >
      
      <DorLContext.Provider value={dorlmode}>
        <Header darkorlightmode={darkorlightmode} />
        <FirstHero />
        <SecondHero />
      </DorLContext.Provider>
    </div>
  );
}

export default Main;
