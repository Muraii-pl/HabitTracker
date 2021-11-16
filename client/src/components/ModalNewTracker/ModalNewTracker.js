import React, {useRef, useState} from 'react';
import './ModalNewTracker.css'
import axios from "axios";
const ModalNewTracker = ({open,openModal,modalRef}) => {
    const [trackerName,setTrackerName] = useState("")
    const [month,setMonth] = useState("")
    const [year,setYear] = useState("")
    const [formError,setFormError] = useState({
        nameError : "",
        monthError: "",
        yearError:""
    })


    const createTracker = () => {
        const date = new Date()
        if(!trackerName) {
            setFormError({...formError,nameError:"Pole nie może być puste"})
        }
        else if(!month) {
            setFormError({...formError,monthError:"Musisz wybrać jakiś miesiac"})
        }
        else if(!year) {
            setFormError({...formError,yearError:"Musisz wpisać rok"})
        }
        else if(parseInt(year) < date.getFullYear()) {
            setFormError({...formError,yearError:`Rok musi być równy lub większy niż: ${date.getFullYear()}`})

        } else {
            const data = {name: trackerName, month: month, year: year}
            axios.post("http://localhost:3001/trackers/create", data, {
                headers: {
                    accessToken: localStorage.getItem("accessToken")
                }
            })
            openModal()
            window.location.reload(false)
        }
    }
    return (
        <>
            {open ? (<div className="modal_wrapper">
                <h3>Dodaj nowy Tracker</h3>
                {formError.nameError && <span>{formError.nameError}</span>}
                <input type="text" name="name" placeholder="Nazwa nowego trackera"  onChange={(event => {setTrackerName(event.target.value)})} autoComplete="off"/>
                {formError.monthError && <span>{formError.monthError}</span>}
                <select type="select" name="month" onChange={(event => {setMonth(event.target.value)})}>
                    <option value="">Wybierz miesiąc</option>
                    <option value="Styczeń">Styczeń</option>
                    <option value="Luty">Luty</option>
                    <option value="Marzec">Marzec</option>
                    <option value="Kwiecień">Kwiecień</option>
                    <option value="Maj">Maj</option>
                    <option value="Czerwiec">Czerwiec</option>
                    <option value="Lipiec">Lipiec</option>
                    <option value="Sierpień">Sierpień</option>
                    <option value="Wrzesień">Wrzesień</option>
                    <option value="Październik">Październik</option>
                    <option value="Listopad">Listopad</option>
                    <option value="Grudzień">Grudzień</option>
                </select>
                {formError.yearError && <span>{formError.yearError}</span>}
                <input type="number" name="year" placeholder="2021" min="2021" onChange={(event => {setYear(event.target.value)})}/>

                <button onClick={createTracker}>Wyślij</button>
            </div>) : (<></>)}
        </>
    );
};

export default ModalNewTracker;