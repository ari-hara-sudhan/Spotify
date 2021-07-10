import React, { useEffect, useState } from 'react'
import "./App.css"
import Login from './Login'
import Player from './Player'
import {  getTokenFromUrl, loginUrl } from './spotify'
function App() {
  
  const[token,setToken]=useState(null)

  useEffect(()=>{
      //run code basedon condition...
      const hash =getTokenFromUrl();
      window.location.hash=""
      const _token =hash.access_token;
      if(_token){
          setToken(_token)
      }
  },[])
  return (
    <div className="app">

      {
        token?(
          <Player/>
        ):(
          <Login/>
        )
      }
    
      
    </div>
  )
}

export default App
