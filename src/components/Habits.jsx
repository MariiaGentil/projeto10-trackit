import { HabitHeader } from "./HabitHeader"
import { HabitMain } from "./HabitMain"
import { HabitFooter } from "./HabitFooter"
import styled from "styled-components"

export const Habits = () => {
    return (
        <DivHabitMain>
            <HabitHeader />
            <HabitMain/>
            <HabitFooter />
        </DivHabitMain>
    )
}

const DivHabitMain = styled.div`
    background-color: var(--background);
    height: calc(100vh - 70px);
    overflow-y: auto;
`