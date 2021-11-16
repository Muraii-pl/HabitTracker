import React from 'react';
import {Link} from "react-router-dom";
import './Tracker.css'
import plus from '../../assets/images/plus.svg'


const Tracker = ({name, month, year, habits, id, newTracker, openModal}) => {
    let content = newTracker ? (<div className="tracker_wrapper tracker_wrapper--new" onClick={openModal}>
        <img src={plus} alt="Add new Tracker" width="50%" height="50%"/>
    </div>) : (<div className="tracker_wrapper">
        <div className="tracker_wrapper__name">{name}</div>
        <div className="tracker_wrapper__month">Miesiąc:{month} {year}</div>
        <div className="tracker_wrapper__habits">Nawyki:{
            habits.map((elements, index) => {
                return `${elements.name}, `
            })
        }</div>

        <button className="tracker_wrapper__button"><Link to={`/trackers/${id}`}>Wyswietl</Link></button>

    </div>)
    return (
        <>
            {content}
        </>
    );

};

export default Tracker;