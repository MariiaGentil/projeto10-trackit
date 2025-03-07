import styled from "styled-components"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
useNavigate

export const HabitFooter = ({ percentage }) => {
    const [toggleButtonRoute, setToggleButtonRoute] = useState('Hábitos de hoje')
    const navigate = useNavigate()

    function routeConfig() {
        if (toggleButtonRoute === 'Hábitos de hoje') {
            setToggleButtonRoute('Todos os Hábitos' )
            navigate('/habitstoday')
        } else{
            setToggleButtonRoute('Hábitos de hoje')
            navigate('/habits')
        }

    }

    console.log(toggleButtonRoute)

    return (
        <DivFooter>
            <p onClick={() => { routeConfig() }} className="route">{toggleButtonRoute}</p>
            <div className="config-progress">
                <div>
                    <CircularProgressbar value={percentage} text={`Hoje`} styles={buildStyles({
                        textColor: "#FFFFFF",
                        pathColor: "#FFFFFF",
                        trailColor: 'transparent'
                    })} />
                </div>
            </div>
            <p>Histórico</p>
        </DivFooter>
    )
}

const DivFooter = styled.div` 
    background-color: var(--white);
    color: var(--blue-ligth);
    height: 70px;
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: var(--primary-font);
    
    div {
        color: var(--white);
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--blue-ligth);
        border-radius: 50%;
    }

    p {
        cursor: pointer;
    }

    div.config-progress{
        width: 90px;
        height: 90px;
        margin-bottom: 40px;
    }

    p.route{
        width: 70px;
        text-align: center;
        text-decoration: none;
    }

`