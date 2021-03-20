
import React, {Component} from "react";
import classes from "../nav.module.css";
import navim1 from '../assets/navim1.svg'
import navim2 from '../assets/navim2.svg'


function allProducts() {
    return (
        <>
        <div className={classes.nav}>
        <img src={navim1} alt="prod" className="navprod" />
        <img src={navim2} alt="assis" className="navassis" />
        </div>
        </>

    );
}
export default allProducts;