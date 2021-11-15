import React from 'react';
import {Link} from "react-router-dom";
import './Tracker.css'


const Tracker = ({name,month,year,habits,id}) => {
    console.log(habits)
    return (
        <div className="tracker_wrapper">
            <div>{name}</div>
            <div>Miesiąc:{month} {year}</div>
            <div>Nawyki:{
                habits.map((elements,index)=>{
                    return `${elements.name}, `
                })
            }</div>

            <Link to={`/trackers/${id}`}><button>Wyswietl</button></Link>
        </div>
    );

};

export default Tracker;