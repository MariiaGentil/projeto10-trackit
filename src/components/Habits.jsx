import { Link } from "react-router-dom"
import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../contexts/UserContext"
import { HabitHeader } from "./HabitHeader"
import { HabitMain } from "./HabitMain"


export const Habits = () => {
    const { userData } = useContext(UserContext)

    return (
        <DivHabitMain>
            <HabitHeader />
            <HabitMain />
        </DivHabitMain>
    )
}

const DivHabitMain = styled.div`
    background-color: var(--background);
    height: 100vh;
`