import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import netflixavatar from '../Images/netflixavatar.png'
import Plans from '../components/Plans.js'
import { NetflixButton } from '../styled/styledcomponents';

const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.body}>
            <Typography variant='h3'>Edit profile</Typography>
                <div className={classes.info}>
                    <img src={netflixavatar} alt='avatar' />
                    <div className={classes.details}>
                        <div className={classes.plans}>
                            <Typography variant="h6">email usuario</Typography>
                            <Typography variant="h5" gutterBottom className={classes.plansText}>Plans</Typography>
                            <Plans cost={7.99}>Netflix Standar</Plans>
                            <Plans cost={11.99}>Netflix Basic</Plans>
                            <Plans wide="medium" color="gray" cost={15.99}>Netflix Premium</Plans>
                            <NetflixButton wide="fullWidth">Sign Out</NetflixButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        minHeight: "100vh",
        width: "100vw",
    },
    body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "800px",
    },
    info: {
        width: "80%",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        display: "flex",
        "& img": {
            height: "100px",
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
    },
    details: {
        width: "100%",
        marginLeft: theme.spacing(3),
        "& h6": {
            backgroundColor: "#aaa",
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: "18px",
        },
    },
    plans: {
        width: "100%",
    },
    plansText: {
        borderBottom: "1px solid lightgray",
    },
}))


export default Profile