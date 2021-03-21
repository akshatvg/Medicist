import React, { Component } from "react";
import classes from "../nav.module.css";
import navim1 from '../assets/navim1.svg'
import navim2 from '../assets/navim2.svg'

import Assistance from '../components/assistance'
import { NavLink } from "react-router-dom";


function allProducts() {
    return (
        <div className={
            classes.mainContainer
        }>
            <div className={
                classes.nav
            }>
                <NavLink to="/allProducts"><img src={navim1}
                        alt="prod"
                        className={
                            classes.navprod
                        }/></NavLink>
                <NavLink to="/interact">
                    <img src={navim2}
                        alt="assis"
                        className={
                            classes.navassis
                        }/></NavLink>
            </div>
            <div className={
                classes.content
            }>
                <h1 className={
                        classes.heading
                    }
                    style={
                        {
                            marginLeft: "40px",
                            marginTop: "30px"
                        }
                }>
                    Assistance
                </h1>
                <Assistance/>
            </div>
        </div>
    );
}
export default allProducts;
