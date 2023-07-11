import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
// Helmet
import { Helmet, } from "react-helmet-async";
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Menu from './Menu/Menu/Menu';


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div>
            <Banner></Banner>
            <Category></Category>

            <Menu></Menu>

            <About></About>
            <Featured></Featured>
            <ContactUs></ContactUs>
        </div>
        </>
    );
};

export default Home;