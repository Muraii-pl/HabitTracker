import React, {useState} from 'react';
import axios from "axios";
import './ModalNewHabit.css'

const ModalNewHabit = ({openModal,showModal,trackerId}) => {
    const [name,setName] = useState("")
    const addHabit = () => {
        const data = {name:name}
        axios.post(`http://localhost:3001/habits/create?trackerId=${trackerId}`,data,{
            headers:{
                accessToken:localStorage.getItem('accessToken')
            }
        }).then(()=>{
            openModal()
            window.location.reload(false)
        })
    }
    return (
        <>
            {showModal && (
                <div className="new_habit__modal">
                    <h3>Nowy Nawyk</h3>
                    <input type="text" name="habit" placeholder="Podaj nazwe nawyku" onChange={(event => {setName(event.target.value)})} className="new_habit__input"/>
                    <button onClick={addHabit} className="modal_newHabit_mainButtonPink">Zapisz</button>
                </div>
            )}
        </>
    );
};

export default ModalNewHabit;