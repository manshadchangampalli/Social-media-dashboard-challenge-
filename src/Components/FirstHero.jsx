import React, { useContext } from 'react'
import Boxes from '../base-components/Boxes'
import { DorLContext } from '../DorLContext'

function FirstHero() {
    const DorLmode = useContext(DorLContext)
    console.log(DorLmode , "DorLmode");
    return (
        <div className="first-hero">
            <Boxes username="@nathnaf" socialmedia="facebook" followers="1987" rates="12 today" rateicon="up"/>
            <Boxes username="@nathnaf" socialmedia="twitter" followers="1044" rates="99 today" rateicon="up"/>
            <Boxes username="@realnathnaf" socialmedia="instagram" followers="11k" rates="1099 today" rateicon="up"/>
            <Boxes username="Nathn F" socialmedia="youtube" followers="8239" rates="144 today" rateicon="down"/>
        </div>
        
    )
}

export default FirstHero
