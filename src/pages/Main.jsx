import React, { useState } from 'react'
import Header from '../Components/Header'
import FirstHero from '../Components/FirstHero'
import SecondHero from '../Components/SecondHero'

function Main() {
    const [ dorlmode , setDorlmode ] = useState()
    const darkorlightmode =  (dorl) =>{
        setDorlmode(dorl)
    }

    return (
        <div  className="main">
            <Header darkorlightmode={darkorlightmode}/>
            <FirstHero/>
            <SecondHero/>
        </div>
    )
}

export default Main
