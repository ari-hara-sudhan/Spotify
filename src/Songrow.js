import React from 'react'
import "./Songrow.css"
function Songrow({track}) {
    return (
        <div className="songrow">
    
            <img className="songrow__alubm" src={track.album.images[0].url}/>
            <div className="songrow__info">
                
          <h2>{track.name}</h2>
                
                <p>
                    {track.artists.map((artist)=>artist.name).join(",")}
                    {track.album.name}
                </p>

            </div>
    
       
            
        </div>
    )
}

export default Songrow
