import { makeStyles } from '@material-ui/core';
import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home = () => {
    const classes = useStyles();
    return (
        <div >
            <Header/>
            <Banner/>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))


export default Home
