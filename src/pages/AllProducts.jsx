
import React, {Component, useState} from "react";
import classes from "../nav.module.css";
import navim1 from '../assets/navim1.svg'
import navim2 from '../assets/navim2.svg'
import cartIcon from '../assets/bx_bx-cart.svg'
import ProductCategories from '../components/productCategories'


function AllProducts() {
    const [page,setPage] = useState(0)
    const [rent,setRent] = useState(true)
    const headings = [""," / Blood Pressure Monitor"," / Pulse Oximeter"," / Oxygen Cylinder"," /  Bottle Stand"," / Strecher"," / Walker"]
    return (
        <div className={classes.mainContainer}>
            <div className={classes.nav}>
                <img src={navim1} alt="prod" className={classes.navprod} />
                <img src={navim2} alt="assis" className={classes.navassis} />
            </div>
            <div className={classes.content}>
                <div className={classes.header}>
                    <div className={page==0?classes.heading:classes.headingInactive}> Rent Supplies </div>
                    <div className={classes.subHeading}>{headings[page]}</div>
                    <button className = {classes.cartButton}> <img className={classes.cartIcon} src={cartIcon}/> Cart </button>
                </div>
                <ProductCategories />
            </div>
        </div>
    );
}
export default AllProducts;
