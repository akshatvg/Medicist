import React, {Component} from "react";
import classes from "./productCategories.module.css";
import bpmonitor from '../assets/ProductImages/prod1.svg'
import oximeter from '../assets/ProductImages/monitor1.svg'
import cylinder from '../assets/ProductImages/oxygen-tank 1.svg'
import drip from '../assets/ProductImages/drip 1.svg'
import strecher from '../assets/ProductImages/stretcher 1.svg'
import walker from '../assets/ProductImages/walker 1.svg'

function productCategories() {
	const products = [
		{
			name: "Blood Pressure Monitor",
			image: bpmonitor,
		},
		{
			name: "Pulse Oximeter",
			image: oximeter,
		},
		{
			name: "Oxyget Cyllinder",
			image: cylinder,
		},
		{
			name: "Bottle Stand",
			image: drip,
		},
		{
			name: "Strecher",
			image: strecher,
		},
		{
			name: "Walker",
			image: walker,
		}
	]
    return (
        <div className={classes.container}>
			{
				products.map((obj,index) => {
					return (
						<div className={classes.product} key={"product"+index} >
						<div className={classes.productImageContainer}>
						<img src={obj.image} className={classes.productImage} key={"productImage"+index}/>
						</div>
							<span className={ classes.productName } key={"productName"+index} > {obj.name} </span>
						</div>
					)
				})
			}
        </div>
    );
}
export default productCategories;
