import React from 'react';
import './mainTemplate.css'

const MainTemplate = ({children}) => {
    return (
        <>
            <div className='mainWrapper'>
                {children}
            </div>
        </>
    );
};

export default MainTemplate;