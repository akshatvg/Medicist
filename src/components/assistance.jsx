import React, {Component} from "react";
import classes from "./assistance.module.css";
import nurse from '../assets/ProductImages/nurse.svg'


function assistance() {
	const products = [
		{
			name: "Nurse Name",
			image: nurse,
		},
		{
			name: "Nurse Name",
			image: nurse,
		},
		{
			name: "Nurse Name",
			image: nurse,
		},
		{
			name: "Nurse Name",
			image: nurse,
		},
		{
			name: "Nurse Name",
			image: nurse,
		},
		{
			name: "Nurse Name",
			image: nurse,
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
export default assistance;
