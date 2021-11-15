import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import MainTemplate from "../../templates/MainTemplate";
import {Helmet} from "react-helmet";
import axios from "axios";
import moment from "moment";

import HabitsDay from "../../components/HabitsDay/HabitsDay";

import './tracker.css'

const Tracker = () => {
    const {id} = useParams()
    const [trackerData, setTrackerData] = useState([])
    const [daysList, setDayList] = useState([])
    const listOfMonth = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzien"]
    useEffect(() => {
        axios.get(`http://localhost:3001/habits/${id}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((response) => {
            setTrackerData(response.data)
            test()
        })
    }, [])
    const {month, year, name, Habits} = trackerData;
    const test = () => {
        let dayList = []
        for (let i = 1; i <= moment(`${year}-${listOfMonth.indexOf(month) + 1}`, "YYYY-MM").daysInMonth(); i++) {
            dayList.push(i)
        }
        setDayList(dayList)
    }

    return (
        <>
            <Helmet>
                <title>Habits Tracker - My Trackers</title>
            </Helmet>
            <MainTemplate>
                <div className="tracker__header">
                    <div>{month} {year}</div>
                    <div>{name}</div>
                </div>
                <div className="tracker__table">
                    <div className="tracker__tableLeft tableLeft">
                        <div className="tableLeft__header">Nawyki</div>
                        <div className="tableLeft__listHabits">
                            {Habits && Habits.map((element, index) => {
                                return (<span key={index} className="listHabits__name">{element.name}</span>)
                            })}
                        </div>
                    </div>
                    <div className="tracker__tableRight tableRight">
                        <div className="tableRight__header">
                            {daysList.map((element, index) => <span key={index}
                                                                    className="tableRight__numberOfDay">{element}</span>)}
                        </div>
                        <div className="tableRight__listDone">
                            {Habits && Habits.map((habitsElement, index) => {
                                return (
                                    <div className="tableRight__row" key={index}>
                                        {daysList.map((dayElement, index) => {

                                            return (
                                                 <HabitsDay index={index+1} days={habitsElement.Days} habitsId={habitsElement.id}/>
                                            )

                                        })}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </MainTemplate>
        </>
    );
};

export default Tracker;