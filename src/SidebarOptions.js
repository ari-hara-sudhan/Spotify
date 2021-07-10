import React from 'react'
import "./SidebarOptions.css"
function SidebarOptions({text,Icon}) {
    return (
        <div className="sidebaroptions">
            {Icon && <Icon className="sidebaroptions__icon"/>}
            {Icon ?(
                <h4>{text}</h4>
            ):(
                <p>{text}</p>
            )
        }
           
            
        </div>
    )
}

export default SidebarOptions
