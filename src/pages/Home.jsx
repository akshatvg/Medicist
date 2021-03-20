import {Button, Grid, makeStyles} from "@material-ui/core";
import React, {Component, useState} from "react";
//import { ReactComponent as wave } from '../assets/wave.svg';
import '../Home.css'
import logo from '../assets/logo.png'
import classes from "../home.module.css";
import formStyle from "../userForm.module.css";
import img1 from '../assets/Img1.svg'
import img2 from '../assets/Img2.svg'
// import {NavLink} from 'react-router-dom'




function Home() {

    const [option, setOption] = useState(true)
    const [currentDisplay, setCurrentDisplay] = useState(true)


    function SignLinkHandler() {
        if (option) {
            setOption(false);
        }
    };

    function LoginLinkHandler() {
        if (!option) {
            setOption(true);
        }
    };

    function changeImg() {
        setCurrentDisplay(!currentDisplay)
    }


    return (
        <div className={classes.LoginPage }>
            <div className={classes.LoginPane}>
                <div className={classes.LogoBanner}>
                    <div className={classes.LogoContainer}>
                        <img src={logo} alt="Fforg" className={classes.Logo} />
                    </div>
                </div>
                <div className="">
                    <div className={classes.Itemlist}>
                        <div
                            className={
                                option
                                    ? classes.active
                                    : classes.LoginLink
                            }
                            onClick={LoginLinkHandler}
                        >
                            Login
        </div>
                        <div
                            className={
                                option
                                    ? classes.SignLink
                                    : classes.activeMargin
                            }
                            onClick={SignLinkHandler}
                        >
                            SignUp
        </div>
                        <div className={classes.Underbar}></div>
                    </div>
                </div>
                <div className={formStyle.UserForm}>
                    {option ?
                        (
                            <>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className={formStyle.InputField}
                                    label="Username"
                                />
                                <input
                                    type="password"
                                    placeholder="enter password"
                                    className={formStyle.InputField}
                                    style={{marginTop: "25px"}}
                                    label="Password"
                                />
                            </>
                        ) : (

                            <>
                                <input
                                    type="text"
                                    placeholder="Email I am signup"
                                    className={formStyle.InputField}
                                    label="Username"
                                />
                                <input
                                    type="password"
                                    placeholder="enter password"
                                    className={formStyle.InputField}
                                    style={{marginTop: "25px"}}
                                    label="Password"
                                />
                            </>
                        )
                    }
                </div>
                <p className={classes.message} id="msg"></p>
                <div className={formStyle.UserButtons}>
                    <button
                        type="submit"
                        className={formStyle.SubButton}
                    // onClick={SubmitHandler}
                    >
                        Submit
        </button>
                </div>
                <div style={{marginTop: "105px"}}>
                </div>
                <div className={classes.DSCLogoContainer}>
                    <a href="https://dscvit.com">
                    </a>
                </div>
            </div>
            <div className={classes.screenshotPane}>
                <div className={classes.prev} onClick={() => changeImg()}>
                    &#10094;
				</div>
                <div className={classes.next} onClick={() => changeImg()}>
                    &#10095;
				</div>
                <div className={classes.MainContainer}>
                    <div className={classes.slideshowContainer}>
                        <div className={classes.mySlides}>
                            <img
                                src={
                                    currentDisplay ? img1 : img2
                                }
                                style={{maxWidth: "100%"}}
                                alt="Showcase"
                            />
                        </div>
                    </div>
                    <div className={classes.text}>
                        {
                            currentDisplay
                                ? "Need medical assistance right at your doorstep?Don’t worry, we got you covered!"
                                : "Need supplies, but finding them too expensive? Don’t worry, we got a solution! "
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
