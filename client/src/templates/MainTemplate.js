import React from 'react';
import './mainTemplate.css'
import Navbar from "../components/Navbar/Navbar";

const MainTemplate = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className='mainWrapper'>
                {children}
            </div>
        </>
    );
};

export default MainTemplate;