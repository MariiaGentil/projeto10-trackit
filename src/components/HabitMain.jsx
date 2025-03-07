import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { UserContext } from "../contexts/UserContext"
import axios from "axios"

export const HabitMain = () => {
    const { userData } = useContext(UserContext)
    const [toggleAddTemp, setToggleAddTemp] = useState(false)
    const [refresh, setRefresh] = useState([])
    const daysWeek = [{ name: 'Domingo', day: 0 }, { name: 'Segunda', day: 1 }, { name: 'Terça', day: 2 }, { name: 'Quarta', day: 3 }, { name: 'Quinta', day: 4 }, { name: 'Sexta', day: 5 }, { name: 'Sábado', day: 6 }]

    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }

    return (
        <>
            <HabitTitle setToggleAddTemp={setToggleAddTemp} />
            {toggleAddTemp ? < HabitAddCard setToggleAddTemp={setToggleAddTemp} config={config} daysWeek={daysWeek} setRefresh={setRefresh}/> : <></>}
            <HabitsCreated config={config} daysWeek={daysWeek} refresh={refresh} setRefresh={setRefresh}/>
        </>
    )
}

const HabitsCreated = ({ config, daysWeek, refresh, setRefresh }) => {
    const [dataHabits, setDataHabits] = useState([])
    let HabitCreatedList = (<></>)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)
        promise.then(response => {
            const { data } = response
            setDataHabits(data)
        }).catch()
    }, [refresh]);

    function removeHabit(id){
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        promise.then().catch()
        setRefresh([])
    }

    if (dataHabits.length === 0) {
        HabitCreatedList = (<DivMsg><p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p></DivMsg>)
    } else {
        HabitCreatedList = (
            dataHabits.map(elem => {
                return (
                    <DivHabitAddTemplate>
                        <p>{elem.name}</p>
                        <div className="days-week">
                            {daysWeek.map((dayW, i) => { return (<div className={elem.days.includes(i) ? 'select' : ''}>{dayW.name[0]}</div>) })}
                        </div>
                        <ion-icon name="trash-outline" onClick={() => {removeHabit(elem.id)}}></ion-icon>
                    </DivHabitAddTemplate>)
            })
        )
    }

    return HabitCreatedList
}

const HabitTitle = ({ setToggleAddTemp }) => {
    return (
        <DivHabitTitle>
            <p>Meus hábitos</p>
            <div className="buttonPlus" onClick={() => { setToggleAddTemp(prev => !prev) }}>
                <p>+</p>
            </div>
        </DivHabitTitle>
    )
}

const HabitAddCard = ({ setToggleAddTemp, config, daysWeek, setRefresh }) => {
    const [habitDataAdd, setHabitDataAdd] = useState({ days: [] })

    function saveDays(elem) {
        const daySelect = [...habitDataAdd.days]
        if (!daySelect.includes(elem)) {
            daySelect.push(elem)
        } else {
            let i = daySelect.indexOf(`${elem}`)
            daySelect.splice(i, 1);
        }
        setHabitDataAdd({ ...habitDataAdd, days: [...daySelect] })
    }

    function saveHabit(e) {
        e.preventDefault()
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habitDataAdd, config)
        promise.then().catch()
        setRefresh([])
        setToggleAddTemp(false)
    }

    return (
        <DivHabitAddTemplate>
            <form onSubmit={saveHabit}>
                <input type="text" placeholder="nome do hábito" onChange={(e) => { setHabitDataAdd({ ...habitDataAdd, name: e.target.value }) }} value={habitDataAdd.name} required />
                <div className="days-week">
                    {daysWeek.map(elem => { return (<SelectDayWeek elem={elem} key={elem.name} saveDays={saveDays} />) })}
                </div>
                <div className="options">
                    <div className="cancel" onClick={() => { setToggleAddTemp(false) }}>Cancelar</div>
                    <button type="submit" className="save">Salvar</button>
                </div>
            </form>
        </DivHabitAddTemplate>
    )
}

const SelectDayWeek = ({ elem, saveDays }) => {
    const [toggleDayweek, setToggleDayWeek] = useState('')

    return (
        <div className={toggleDayweek} onClick={() => {
            setToggleDayWeek(toggleDayweek === '' ? 'select' : '');
            saveDays(elem.day)
        }}>{elem.name[0]}</div>
    )
}

const DivHabitAddTemplate = styled.div`
    background-color: var(--white);
    font-family: var(--primary-font);
    width: 90%;
    margin: 0 auto 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;

    input{
        width: 80vw;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--grey-ligth);
        color: var(--grey-dark);
        font-size: 16px;
    }
    
    input::placeholder{
        color: var(--grey-ligth)
    }

    input:focus{
        outline: 1px solid var(--grey-dark);
    }

    div.days-week{
        width: 80vw;
        margin: 10px 0 10px;
        display: flex;
        gap: 5px;
    }

    div.days-week div {
        color: var(--grey-ligth);
        border: 1px solid var(--grey-ligth);
        border-radius: 5px;
        padding: 4px 7px;
        background-color: var(--white);
        cursor: pointer;
    }

    div.days-week div.select {
        background-color: var(--grey-ligth);
        color: var(--white);
        border: 1px solid var(--grey-ligth);
    }

    div.options {
        display: flex;
        width: 80vw;
        justify-content: flex-end;
        gap: 10px;
    }

    div.options button.save {
        background-color: var(--blue-ligth);
        color: var(--white);
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    div.options div.cancel {
        color: var(--blue-ligth);
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    
    p{
        color: var(--grey-dark);
        margin: 0 auto 5px 3%;
    }

    ion-icon{
        color: var(--grey-dark);
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
`

const DivHabitTitle = styled.div`
    font-family: var(--primary-font);
    display: flex;
    justify-content: space-between;
    padding: 20px 40px 20px 10px;

    p{
        font-size: 22px;
        color: var(--blue-dark);
    }
    
    .buttonPlus{
        background-color: var(--blue-ligth);
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .buttonPlus p{
        color:  var(--white);
        padding-top: 2px;
    }
`

const DivMsg = styled.div`
    font-family: var(--primary-font);
    color: var(--grey-dark);
    width: 95%;
    margin: 0 auto;
`