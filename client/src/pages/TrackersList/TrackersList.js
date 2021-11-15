import React, {useEffect, useState} from 'react';
import axios from "axios";

import {Helmet} from "react-helmet";
import MainTemplate from "../../templates/MainTemplate";
import "../../components/Tracker/Tracker"

import './trackersList.css'
import Tracker from "../../components/Tracker/Tracker";

const TrackerList = () => {

    const [trackersList,setTrackersList] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/trackers/",{
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((response)=>{
            setTrackersList(response.data)
        })
    },[])

    return (
        <>
            <Helmet>
                <title>Habits Tracker - My Trackers</title>
            </Helmet>
            <MainTemplate>
                <header className="trackerList__header">
                    <h1>Habits Tracker</h1>
                </header>
                <div className="trackerList__wrapper">
                    {trackersList.map((element,index)=>{
                       return <Tracker name={element.name} month={element.month} year={element.year} habits={element.Habits} id={element.id}/>
                    })}
                </div>
            </MainTemplate>
        </>
    );
};

export default TrackerList;