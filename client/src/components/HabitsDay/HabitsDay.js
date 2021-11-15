import React from 'react';
import './HabitsDay.css'
import axios from "axios";

const HabitsDay = ({index,days,habitsId}) => {

    const onClick = () => {
        axios.post(`http://localhost:3001/habits/addDays/${index}?habitId=${habitsId}`,{},{
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((response)=>{
            if(response.data === "Success") {
                window.location.reload(false)
            }
        })
    }
    let doneDay = []
    days.forEach(element => doneDay.push(element.day))
    return(
        <>
            {doneDay.includes(`${index}`) ?  <div className="circle circle__Done" data-id={index}/> :   <div className="circle circle__notDone" data-id={index} onClick={onClick}/>}
        </>

    );
};

export default HabitsDay;