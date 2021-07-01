import React from 'react'
import OverViewBoxes from '../base-components/OverViewBoxes'

function SecondHero() {
    return (
        <div className="second-hero">
            <h1>Overview - Today</h1>
            <div className="second-hero-second-part">
                <OverViewBoxes upordown="up" details="page views" socialmedia="facebook" count="87" percentage="3"/>
                
            </div>
            
        </div>
    )
}

export default SecondHero
