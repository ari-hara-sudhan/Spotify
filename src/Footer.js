import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayArrowRounded"
import SkipPreviousIcon from "@material-ui/icons/PlayArrow"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import PlaylistPlaytIcon from "@material-ui/icons/PlaylistAdd"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"
import {Grid ,Slider} from "@material-ui/core"
function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__alubm" src="https://www.bing.com/th?id=OIP.5TFdq1ah-13yRK4aqMqt8wHaFj&w=196&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="nn"/>
                <div className="footer__songinfo">
                    <h4>Yeah</h4>
                    <p>user</p>

                </div>

            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </div>
            <div className="footer__right">
               <Grid container spacing={2}>
                   <Grid item>
                       <PlaylistPlaytIcon/>

                   </Grid>
                   <Grid item>
                       <VolumeDownIcon/>
                   </Grid>
                   <Grid item xs>
                       <Slider/>
                   </Grid>
               </Grid>

            </div>
        </div>
    )
}

export default Footer
