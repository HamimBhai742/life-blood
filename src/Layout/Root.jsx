import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Nabvar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;