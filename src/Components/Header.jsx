import React, { useState } from 'react'

function Header(props) {
    const [ isChecked , setIsChecked ] = useState(false)
    props.darkorlightmode(isChecked)
    return (
        <div className="header">
            <div className="title">
                <h1>Social Meadia Dashboard</h1>
                <p>Totla Followrs : 23,004</p>
            </div>
            <div className="modes">
                <p>Dark Mode</p>
                <input type="checkbox" 
                        checked={isChecked}
                        onChange={(e)=>{setIsChecked(e.target.checked)}}
                />
                <div className="slider"></div>
            </div>
        </div>
        
    )
}

export default Header
