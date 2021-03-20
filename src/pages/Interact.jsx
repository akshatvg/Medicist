
import React, {Component} from "react";
import classes from "../nav.module.css";
import navim1 from '../assets/navim1.svg'
import navim2 from '../assets/navim2.svg'

import Assistance from '../components/assistance'


function allProducts() {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.nav}>
                <img src={navim1} alt="prod" className={classes.navprod} />
                <img src={navim2} alt="assis" className={classes.navassis} />
            </div>
            <div className={classes.content}>
                <Assistance />
            </div>
        </div>
    );
}
export default allProducts;
