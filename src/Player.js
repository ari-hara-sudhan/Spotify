import React from 'react'
import "./Player.css"
import Sidebar from './Sidebar'
function Player({spotify}) {
    return (
        <div className="player">
           <Sidebar/>
        </div>
    )
}

export default Player
