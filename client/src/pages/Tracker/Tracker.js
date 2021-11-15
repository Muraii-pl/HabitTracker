import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import MainTemplate from "../../templates/MainTemplate";
import {Helmet} from "react-helmet";
import axios from "axios";

const Tracker = () => {
    const {id} = useParams()
    []
    useEffect(()=>{
        axios.get(`http://localhost:3001/habits/${id}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((response)=>{

        })
    })
    return (
        <>
            <Helmet>
                <title>Habits Tracker - My Trackers</title>
            </Helmet>
            <MainTemplate>
            </MainTemplate>
        </>
    );
};

export default Tracker;