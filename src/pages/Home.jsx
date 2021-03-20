import {Button, Grid, makeStyles} from "@material-ui/core";
import React, {Component, useState} from "react";
//import { ReactComponent as wave } from '../assets/wave.svg';

import logo from '../assets/logo.png'
import classes from "../home.module.css";
import formStyle from "../userForm.module.css";
// import {NavLink} from 'react-router-dom'




function Home() {

    const [option, setOption] = useState(true)


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


    return (
        <>
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
        <div >
            
        </div>
        </>
    );
}
export default Home;
