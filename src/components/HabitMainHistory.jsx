import { useState, useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"
import styled from "styled-components"
import dayjs from "dayjs"
import axios from "axios"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export const HabitMainHistory = () => {
    const { userData } = useContext(UserContext)
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
        }).catch()
    }, []);

    return (
        <DivHistoryTemplate>
            <h1>Histórico</h1>
            <CalendarContainer>
                <Calendar calendarType={"gregory"} className={'calendar '} formatDay={(locale, date) => {

                    return (<CalendarDay date={date} habitsHistory={habitsHistory} />)
                }

                } />
            </CalendarContainer>
        </DivHistoryTemplate>
    )
}

const CalendarDay = ({ date, habitsHistory }) => {
    let dayHistory = dayjs(date).format('DD/MM/YYYY');
    let day = dayjs(date).format('DD');
    let dayTemplate = (<p className="number-day">{day}</p>)

    habitsHistory.map(elem => {
        if (elem.day.includes(dayHistory)) {
            dayTemplate = (<p className="number-day green">{day}</p>)
            elem.habits.map(elemHabits => {
                if (elemHabits.done === false) {
                    dayTemplate = (<p className="number-day red">{day}</p>)
                }
            })
        } 
    })

    return dayTemplate
}

const DivHistoryTemplate = styled.div`
    font-family: var(--primary-font);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px 0 0 20px;

    h1{
        font-size: 22px;
        color: var(--blue-dark); 
        margin-bottom: 50px;
    }

`

const CalendarContainer = styled.div`
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    
    .calendar{
        width: 90%;
        border-radius: 5px;
        border: none;
        font-family: var(--primary-font);
    }

    .number-day{
        height: 50px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .number-day.green{
        background-color: var(--green);
        border-radius: 50%;
    }

    .number-day.red{
        background-color: var(--red);
        border-radius: 50%;
    }

`
