import { useState, useContext, useEffect } from "react"
import { PercentContext } from "../contexts/PercentContext"
import { UserContext } from "../contexts/UserContext"
import styled from "styled-components"
import dayjs from "dayjs"
import axios from "axios"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export const HabitMainHistory = () => {
    const { userData } = useContext(UserContext)
    const [refresh, setRefresh] = useState([])
    const [habitsHistory, setHabitsHistory] = useState([])
    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily`, config)
        promise.then(response => {
            const { data } = response
            setHabitsHistory(data)
            console.log(data)
        }).catch()
    }, [refresh]);


    
    return (
        <DivHistoryTemplate>
            <h1>Histórico</h1>
            <Calendar />
        </DivHistoryTemplate>
    )
}

const HabitsHistory = () => {

    
}

const DivHistoryTemplate = styled.div`
    font-family: var(--primary-font);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 0 0 10px;

    h1{
        font-size: 22px;
        color: var(--blue-dark); 
        margin-bottom: 50px;
    }

`
