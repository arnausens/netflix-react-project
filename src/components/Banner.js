import { Button, makeStyles, Typography } from '@material-ui/core';
import HeroBanner from "../Images/netflix.jpeg"
import React from 'react'


const Banner = () => {
    const classes = useStyles();

    const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)} ...` : string;

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography variant="h2" component="h1">
                    Movie Title
                </Typography>
                <div className={classes.buttons}>
                    <Button>Play</Button>
                    <Button>My list</Button>
                </div>
                <Typography variant="h6" className={classes.description} style={{wordWrap: "break-word"}}>
                    {
                        truncate("Descripcion de película Descripcion de película Descripcion ion de película Descripcion de película Descripcion de película Descripcion de películaDescripcionion de película Descripcion de película Descripcion de película Descripcion de películaDescripcionion de película Descripcion de película Descripcion de película Descripcion de películaDescripcion de película Descripcion de película Descripcion de película Descripcion de películaDescripcion de película Descripcion de película Descripcion de película", 150)
                    }    
                </Typography>
                <div className={classes.fadebottom}></div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${HeroBanner})`,
        position: "relative",
        height: "440px",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff"
    },
    buttons: {
        "& button": {
            cursor: "pointer",
            color: "#fff",
            fontWeight: 700,
            borderRadius: "5px",
            padding: theme.spacing(1, 4, 1, 4),
            marginRight: "1rem",
            backgroundColor: "rgba(51,51,51,0.5)",
        },
        "& button:hover": {
            color: "#000",
            backgroundColor: "#e6e6e6"
        }
    },
    fadebottom: {
        position: "absolute",
        top: "30vh",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundImage: "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)", 
    }
}))

export default Banner