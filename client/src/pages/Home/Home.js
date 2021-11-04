import React from 'react';
import './home.css'
import MainTemplate from "../../templates/MainTemplate";
import '../../assets/fonts/FrederickatheGreat-Regular.ttf';

const Home = () => {
    return (
        <MainTemplate>
            <div className='homeTitle'>
                Habits Tracker
            </div>
        </MainTemplate>
    );
};

export default Home;