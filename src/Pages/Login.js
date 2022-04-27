import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import logo from "../Images/netflix-logo.png"
import HeroBanner from "../Images/HeroBanner.jpg";
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';

const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={logo} className={classes.image} alt="logo"/>
            <NetflixButton className={classes.session}>Iniciar sesión</NetflixButton>
            <div className={classes.info}>
                <Typography variant='h4' gutterBottom>
                  Unlimited films, TV programmes and more.
                </Typography>
                <Typography variant='h5'>
                  Watch anywhere. Cancel at any time.
                </Typography>
                <Typography variant='h6' gutterBottom>
                  Ready to watch ? Enter your email to create or restart your
                  membership.
                </Typography>
                <div className={classes.inputBlock}>
                    <NetflixInput placeholder='Email address'/>
                    <NetflixButton>GET STARTED</NetflixButton>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${HeroBanner})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        position: "fixed",
        top: 0,
        left: 20,
        width: "150px",
        cursor: "pointer"
    },
    session: {
        position: "fixed",
        zIndex: 15,
        right: 20,
        top: 20
    },
    info: {
        color: "#fff",
        zIndex: 15,
        textAlign: "center",
        "& h4": {
            fontWeight: 800,
        },
        "& h5": {
            fontWeight: 400,
        },
    }
}))


export default Login