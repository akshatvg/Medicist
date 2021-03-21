import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { Component, useState } from "react";
// import { ReactComponent as wave } from '../assets/wave.svg';
import '../Home.css'
import logo from '../assets/logo.png'
import classes from "../home.module.css";
import formStyle from "../userForm.module.css";
import img1 from '../assets/Img1.svg'
import img2 from '../assets/Img2.svg'
import { Link } from "react-router-dom";
// import {NavLink} from 'react-router-dom'

function Home() {

    const [option, setOption] = useState( true )
    const [currentDisplay, setCurrentDisplay] = useState( true )


    function SignLinkHandler() {
        if ( option ) {
            setOption( false );
        }
    };

    function LoginLinkHandler() {
        if ( !option ) {
            setOption( true );
        }
    };

    function changeImg() {
        setCurrentDisplay( !currentDisplay )
    }


    return (
        <div className={
            classes.LoginPage
        }>
            <div className={
                classes.LoginPane
            }>
                <div className={
                    classes.LogoBanner
                }>
                    <div className={
                        classes.LogoContainer
                    }>
                        <img src={logo}
                            alt="Medicist"
                            className={
                                classes.Logo
                            }/>
                    </div>
                </div>
                <div>
                    <div className={
                        classes.Itemlist
                    }>
                        <div className={
                                option ? classes.active : classes.LoginLink
                            }
                            onClick={LoginLinkHandler}
                            style={
                                { cursor: "pointer" }
                        }>
                            Login
                        </div>
                        <div className={
                                option ? classes.SignLink : classes.activeMargin
                            }
                            onClick={SignLinkHandler}
                            style={
                                { cursor: "pointer" }
                        }>
                            SignUp
                        </div>
                        <div className={
                            classes.Underbar
                        }></div>
                    </div>
                </div>
                <div className={
                    formStyle.UserForm
                }>
                    {
                    !option ? (
                        <>
                            <input type="text" placeholder="Full Name"
                                className={
                                    formStyle.InputField
                                }
                                label="Full Name"/>
                            <input type="text" placeholder="Email"
                                className={
                                    formStyle.InputField
                                }
                                label="Email Address"/>
                            <input type="text" placeholder="Mobile number"
                                className={
                                    formStyle.InputField
                                }
                                label="Mobile Number"/>
                            <input type="password" placeholder="Enter password"
                                className={
                                    formStyle.InputField
                                }
                                label="Password"/>
                            <input type="password" placeholder="Re-enter your password"
                                className={
                                    formStyle.InputField
                                }
                                label="Re-enter your password"/>
                        </>
                    ) : (

                        <>
                            <input type="text" placeholder="Email"
                                className={
                                    formStyle.InputField
                                }
                                label="Username"/>
                            <input type="password" placeholder="Enter password"
                                className={
                                    formStyle.InputField
                                }
                                style={
                                    { marginTop: "25px" }
                                }
                                label="Password"/>
                        </>
                    )
                } </div>
                <p className={
                        classes.message
                    }
                    id="msg"></p>
                <div className={
                    formStyle.UserButtons
                }>
                    <Link to={
                        { pathname: "/allProducts" }
                    }>
                        <button type="submit"
                            className={
                                formStyle.SubButton
                        }>
                            Submit
                        </button>
                    </Link>
                </div>
                <div style={
                    { marginTop: "105px" }
                }></div>
            </div>
            <div className={
                classes.screenshotPane
            }>
                <div>
                    <h1 style={
                        {
                            textAlign: "center",
                            marginTop: "45px",
                            color: "white"
                        }
                    }>
                        {
                        currentDisplay ? "Get Assistance" : "Rent supplies"
                    }</h1>
                </div>
                <div className={
                        classes.prev
                    }
                    onClick={
                        () => changeImg()
                }>
                    &#10094;
                </div>
                <div className={
                        classes.next
                    }
                    onClick={
                        () => changeImg()
                }>
                    &#10095;
                </div>
                <div className={
                    classes.MainContainer
                }>
                    <div className={
                        classes.slideshowContainer
                    }>
                        <div className={
                            classes.mySlides
                        }>
                            <img src={
                                    currentDisplay ? img1 : img2
                                }
                                style={
                                    { maxWidth: "100%" }
                                }
                                alt="Showcase"/>
                        </div>
                    </div>
                    <div className={
                        classes.text
                    }>
                        {
                        currentDisplay ? "Need medical assistance right at your doorstep? Don’t worry, we got you covered!" : "Need supplies, but finding them too expensive? Don’t worry, we got a solution!"
                    } </div>
                </div>
            </div>
        </div>

    );
}
export default Home;
