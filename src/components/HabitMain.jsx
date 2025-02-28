import { useState, useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../contexts/UserContext"

export const HabitMain = () => {
    const { userData } = useContext(UserContext)
    const [nameHabit, setNameHabit] = useState('')
    const [toggleAddTemp, setToggleAddTemp] = useState(false)
    const daysWeek = [{name: 'Domingo', day: 0}, {name: 'Segunda', day: 1}, {name: 'Terça', day: 2}, {name: 'Quarta', day: 3}, {name: 'Quinta', day: 4}, {name: 'Sexta', day: 5}, {name: 'Sábado', day: 6}]
    const daySelect = []
    
    const HabitTitle = () => {
        return (
            <DivHabitTitle>
                <p>Meus hábitos</p>
                <div className="buttonPlus" onClick={() => { setToggleAddTemp(prev => !prev) }}>
                    <p>+</p>
                </div>
            </DivHabitTitle>
        )
    }

    const HabitAddTemplate = () => {
        if (toggleAddTemp) {
            return (
                <DivHabitAddTemplate>
                    <form onSubmit={saveHabit}>
                        <input type="text" placeholder="nome do hábito" required onChange={e => setNameHabit(e.target.value)} value={nameHabit}/>
                    <div className="days-week">
                        {daysWeek.map(elem => { return (<SelectDayWeek elem={elem} />) })}
                    </div>
                    <div className="options">
                        <button className="cancel" onClick={() => { setToggleAddTemp(false) }}>Cancelar</button>
                        <button type="submit" className="save">Salvar</button>
                    </div>
                    </form>
                </DivHabitAddTemplate>
            )
        } else {
            return (
                <></>
            )
        }
    }

    const SelectDayWeek = ({ elem }) => {
        const [toggleDayweek, setToggleDayWeek] = useState('')
        return (
            <div className={toggleDayweek} key={elem} onClick={() => { setToggleDayWeek(toggleDayweek === '' ? 'select' : ''); daySelectList(elem.day)}}>{elem.name[0]}</div>
        )

    }

    const daySelectList = (elem) => {
        if(!daySelect.includes(elem)){
            daySelect.push(elem)
        } else{ 
            let i = daySelect.indexOf(`${elem}`)
            daySelect.splice(i, 1);
        }
    }

    const saveHabit = (e) => {
        e.preventDefault()
        const habitDataTemp = {days: [...daySelect], name: nameHabit}

        console.log(habitDataTemp)
    }



    const HabitTemplate = () => {

    }

    return (
        <>
            <HabitTitle />
            <HabitAddTemplate />
        </>
    )
}

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
const DivHabitAddTemplate = styled.div`
    background-color: var(--white);
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

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
        margin: 10px 0 20px;
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

    div.options button.cancel {
        color: var(--blue-ligth);
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`