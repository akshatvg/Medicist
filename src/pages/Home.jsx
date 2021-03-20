import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { Component }from "react";
//import { ReactComponent as wave } from '../assets/wave.svg';
import wave from '../assets/wave.svg'
import '../Home.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'



function Home() {

    return (
        <>
        <div className="nav">
            
            <img src={logo} />
            <div className="options">
            <NavLink className='navBarLink' to="/">About</NavLink>
            <NavLink className='navBarLink' to="/product">Services</NavLink>
            <NavLink className='navBarLink' to="/product">Contact Us</NavLink>
            <Button variant="outlined" color="primary" href="#"> Sign In </Button>
            <Button variant="contained" color="primary" href="#" > Sign Up </Button>
            </div>
        </div>
    <div className="wave">
    
        <img src={wave} />
        
    </div>
    <div className="main">
        <h1>Medicist</h1>
        <h2>Not Your Regular Assistant</h2>
    </div>
    </>
      );
}
export default Home;
