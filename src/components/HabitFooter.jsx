import styled from "styled-components"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const HabitFooter = ({ percentage }) => {
    return (
        <DivFooter>
            <p>Hábitos</p>
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

`