import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useContext } from "react";
import { PercentContext } from "../contexts/PercentContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import "react-circular-progressbar/dist/styles.css";


export const HabitFooter = ({ today, history }) => {
    const navigate = useNavigate()
    const { percentage, setPercentage } = useContext(PercentContext)

    if (percentage === 99) {
        setPercentage(100)
    } else if (percentage === 1) {
        setPercentage(0)
    }

    function routeConfig(elem) {
        if(elem === 'habits'){
            !today ? navigate('/habitstoday') : navigate('/habits')
        } else if(elem === 'history'){
            !history ? navigate('/habitshistory') : navigate('/habits')
        }
    }

    return (
        <DivFooter>
            <p onClick={() => { routeConfig('habits') }} className="route">{!today ? `Hábitos de Hoje` : `Todos os Hábitos`}</p>
            <div className="config-progress">
                <div>
                    <CircularProgressbar value={percentage} text={`Hoje`} styles={buildStyles({
                        textColor: "#FFFFFF",
                        pathColor: "#FFFFFF",
                        trailColor: 'transparent'
                    })} />
                </div>
            </div>
            <p onClick={() => { routeConfig('history') }} className="route">{!history ? `Histórico` : `Todos os Hábitos`}</p>
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