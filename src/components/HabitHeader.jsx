import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"
import styled from "styled-components"

export const HabitHeader = () => {
    const { userData } = useContext(UserContext)

    return (
        <DivHeader>
            <h1>TrackIt</h1>
            <img src={userData.image} alt="" />
        </DivHeader>
    )
}

const DivHeader = styled.div` 
    background-color: var(--blue-dark);
    color: var(--white);
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 6px #0000007f;

    img{
        height: 80%;
        border-radius: 50%;
    }

    h1{
        font-size: 40px;
        font-family: var(--secundary-font);
    }

`