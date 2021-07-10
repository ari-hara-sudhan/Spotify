import React from 'react'
import "./Sidebar.css"
import SidebarOptions from './SidebarOptions'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryAdd"
import { useDataLayerValue } from './DataLayer'
function Sidebar() {
    const [{playlists},dispatch]=useDataLayerValue()
    console.log(playlists)
    return (
        <div className="sidebar">
        
            <img className="sidebar__logo" src="https://www.bing.com/th?id=OIP.kmppoQlcmogYGfwRpi_aDQHaHa&w=113&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="spty"/>
     

       
          
            <SidebarOptions text="Home" Icon={HomeIcon}/>
            <SidebarOptions text="Search" Icon={SearchIcon}/>
            <SidebarOptions text="Your Library" Icon={LibraryMusicIcon}/>
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            {
                playlists?.items?.map(playlist=>(
                    <SidebarOptions text={playlist.name} />
                ))
            }
          
          
        </div>
    )
}

export default Sidebar