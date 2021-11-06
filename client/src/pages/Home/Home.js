import React from 'react';
import './home.css'
import MainTemplate from "../../templates/MainTemplate";
import arrowDown from '../../assets/images/arrow-down.png';

const Home = () => {
    return (
        <MainTemplate>
            <div className='homeTitle'>
                Habits Tracker
            </div>
            <div className='homeSubtitle'>
                Zmień swoje nawyki już dziś
            </div>
            <div className='buttonDiv'>
                <button className='mainButton'>
                    Dowiedz się więcej
                </button>
            </div>
            <div className='buttonDiv'>
                <button className='noneButton'>
                    <img src={arrowDown} alt='arrow down'/>
                </button>
            </div>
        </MainTemplate>
    );
};

export default Home;