import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/Navbar&Footer/NavBar';
import Footers from '../Shared/Navbar&Footer/Footers';

const Main = () => {
    return (
        <>
           <NavBar/>
           <Outlet/>
           <Footers/> 
        </>
    );
};

export default Main;