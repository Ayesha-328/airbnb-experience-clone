import React from 'react'
import Photo from "../images/photoGrid.png"
import "./styles.css";

function Hero() {
  return (
    <div className="container">
        <div className="grid-container">
        <img src={Photo} id="photo-grid" alt="grid" />
        </div>
        
        <h1 className="main-heading">Online Experiences</h1>
        <p className="content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        
        
    </div>
  )
}

export default Hero