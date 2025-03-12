import { useState, useContext, useEffect } from "react"
import { PercentContext } from "../contexts/PercentContext"
import { UserContext } from "../contexts/UserContext"
import styled from "styled-components"
import dayjs from "dayjs"
import axios from "axios"

export const HabitMainToday = () => {
    const { percentage, setPercentage } = useContext(PercentContext)
    const { userData } = useContext(UserContext)
    const day = dayjs().format('DD/MM')
    const weekDay = dayjs().day()
    const daysWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }

    return (
        <>
            <DivDataProgress>
                <p className="day">{daysWeek[weekDay]}, {day}</p>
                {percentage < 1 ? <p className="progress">Nenhum hábito concluído ainda</p> : <p className="progress green-color">{percentage}% dos hábitos concluídos</p>}
                <HabitsTodayList config={config} percentage={percentage} setPercentage={setPercentage} />
            </DivDataProgress>
        </>
    )
}

const HabitsTodayList = ({ config, setPercentage }) => {
    const [habitsToday, setHabitsToday] = useState([])
    const [refresh, setRefresh] = useState([])
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)
        promise.then(response => {
            const { data } = response
            setHabitsToday(data)
            doneList(data)
        }).catch()
    }, [refresh]);
    
    function toggleMarkDone(elemDone, elemID) {
        if (elemDone) {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${elemID}/uncheck`, [], config)
            promise.then(() => {
                setRefresh([])
            }
        ).catch()
    } else {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${elemID}/check`, [], config)
        promise.then(() => {
            setRefresh([])
        }
    ).catch()
}
}

function doneList(data){
        let percentageUnidade = parseInt(100 / data.length)
        let value = 0
        data.map(elem => {elem.done ? value += percentageUnidade : ''})
        setPercentage(value)
    }

    return (
        <DivHabitTemplate>
            <div>
                {habitsToday.map(elem => {
                    return (<HabitList elem={elem} toggleMarkDone={toggleMarkDone} key={elem} />)
                })}
            </div>
        </DivHabitTemplate>
    )

}


const HabitList = ({ elem, toggleMarkDone }) => {

    return (
        <div className="habit-template">
            <div>
                <p className="title-habit">{elem.name}</p>
                <p className="description">Sequência atual: <span className={elem.done ? `green-color` : ``}>{elem.currentSequence} dias</span></p>
                <p className="description">Seu recorde: <span className={elem.done && elem.currentSequence === elem.highestSequence ? `green-color` : ``}>{elem.highestSequence} dias</span></p>
            </div>
            <div className={elem.done ? `check-mark green-bg` : `check-mark`} onClick={() => { toggleMarkDone(elem.done, elem.id) }}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </div>
        </div>
    )

}

const DivDataProgress = styled.div`

    font-family: var(--primary-font);
    margin: 30px 0 50px 20px;
    overflow-y: auto;
    
    p.day{
        color: var(--blue-dark);
        font-size: 20px;
        margin-bottom: 10px;
    }

    .green-color{
        color: var(--green) !important;
    }

    .green-bg{
        background-color: var(--green) !important;
    }
    
    p.progress{
        color: var(--grey-ligth);
        margin-bottom: 20px;
    }


`

const DivHabitTemplate = styled.div`
    
    .habit-template{
        margin-bottom: 20px; 
        background-color: var(--white);
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-radius: 5px;
    }

    p.title-habit{
        color: var(--grey-dark);
        margin-bottom: 10px;
    }

    p.description{

        color: var(--grey-dark);
        font-size: 10px;
        margin-bottom: 5px;

    }

    .check-mark{
        background-color: var(--grey-ligth);
        display: flex;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        color: var(--white);
        padding: 0 15px;
        font-size: 30px;
        cursor: pointer;
    }
`