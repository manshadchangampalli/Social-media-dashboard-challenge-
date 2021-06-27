import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="title">
                <h1>Social Meadia Dashboard</h1>
                <p>Totla Followrs : 23,004</p>
            </div>
            <div className="modes">
                <p>Dark Mode</p>
                <input type="checkbox" />
                <div className="slider"></div>
            </div>
        </div>
        
    )
}

export default Header
