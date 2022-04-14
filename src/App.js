import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { makeStyles } from '@material-ui/core';
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Paypal from "./Pages/Paypal";
import Home from "./Pages/Home";

function App() {
    const user = "null";
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Router>
                {
                    !user ? (<Login/>) : (
                        <Routes>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/checkout' element={<Paypal/>}/>
                            <Route exact path="/" element={<Home/>}/>
                        </Routes>
                    )
                }
            </Router>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        // background: "#111",
        minHeight: "100vh"
    }
}))

export default App;
