import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import { Outlet } from 'react-router-dom';

const Body = () => {
    const location = useLocation();

    return (
        <div className="">
            <Navbar />
            {location.pathname === '/' && <Home />}
            <Outlet />
        </div>
    );
}

export default Body;
