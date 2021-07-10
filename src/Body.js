import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from "@material-ui/icons/PlaylistPlay"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/More"
import Songrow from './Songrow'
function Body({spotify}) {
    const[{discover_weekly},dispatch]=useDataLayerValue()
    return (
        <div className="body">
            <Header spotify ={spotify} />
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="image"/>
                <div className="body__infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>

            </div>
            <div className='body__songs'>
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    <FavoriteIcon fontSize="large" className="body__icon"/>
                    <MoreHorizIcon className="body__icon"/>
                </div>
        
           

       
     
            </div>
            { discover_weekly?.tracks.items.map(item=>(
            
            <Songrow track={item.track}/>
        
        ))}
            
        </div>
    )
}

export default Body
