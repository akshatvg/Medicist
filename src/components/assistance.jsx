import React, { Component } from "react";
import classes from "./assistance.module.css";
import akshatvg from '../assets/ProductImages/akshatvg.png';
import aditya from '../assets/ProductImages/aditya.png';
import muskanT from '../assets/ProductImages/muskanT.png';
import vidhi from '../assets/ProductImages/vidhi.png';
import ishaan from '../assets/ProductImages/ishaan.png';
import muskanR from '../assets/ProductImages/muskanR.png';


function assistance() {
    const products = [
        {
            name: "Aditya Rathore",
            description: "Certified professional in Dentistry",
            phone: "9876543210",
            image: aditya
        },
        {
            name: "Muskan Tewari",
            description: "Certified professional in Cardiology",
            phone: "9876543210",
            image: muskanT
        },
        {
            name: "Akshat Gupta",
            description: "Certified Psychologist",
            phone: "9876543210",
            image: akshatvg
        },
        {
            name: "Vidhi Agarwal",
            description: "Certified Psychologist",
            phone: "9876543210",
            image: vidhi
        }, {
            name: "Ishaan Jain",
            description: "Certified Psychologist",
            phone: "9876543210",
            image: ishaan
        }, {
            name: "Muskan Rastogi",
            description: "Certified professional in Optics",
            phone: "9876543210",
            image: muskanR
        }
    ]
    return (

        <div className={
            classes.container
        }>
            {
            products.map( ( obj, index ) => {
                return (
                    <div className={
                            classes.product
                        }
                        key={
                            "product" + index
                    }>
                        <div className={
                            classes.productImageContainer
                        }>
                            <img src={
                                    obj.image
                                }
                                className={
                                    classes.productImage
                                }
                                key={
                                    "productImage" + index
                                }/>
                        </div>
                        <div className={
                            classes.overlayContainer
                        }>
                            <div className={
                                classes.overlay
                            }>
                                <div className={
                                    classes.text
                                }>
                                    <a href="http://dytecall.akshatvg.com/host?meetingId=0e8f9406-3032-4cf0-9c04-4cd2e94dbd04&roomName=pollen-cylinder"
                                        style={
                                            { color: "white" }
                                    }>Video Conference with Professional</a>
                                </div>
                            </div>
                        </div>
                        <div className={
                            classes.detailContainer
                        }>
                            <span className={
                                    classes.productName
                                }
                                key={
                                    "productName" + index
                                }
                                style={
                                    { fontWeight: "bolder" }
                            }>
                                {
                                obj.name
                            } </span>
                            <br/><br/><br/>
                            <span className={
                                classes.description
                            }>
                                {
                                obj.description
                            }</span>
                            <br/><br/><br/>
                            <span className={
                                classes.phone
                            }>
                                Ph:&nbsp;
                                <i>{
                                    obj.phone
                                }</i>
                            </span>
                        </div>

                    </div>
                )
            } )
        } </div>

    );
}
export default assistance;
