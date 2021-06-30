import React from 'react'
import OverViewBoxes from '../base-components/OverViewBoxes'

function SecondHero() {
    return (
        <div className="second-hero">
            <h1>Overview - Today</h1>
            <div className="second-hero-second-part">
                <OverViewBoxes/>
                <OverViewBoxes/>
                <OverViewBoxes/>
                <OverViewBoxes/>
                <OverViewBoxes/>
                <OverViewBoxes/>
            </div>
            
        </div>
    )
}

export default SecondHero
